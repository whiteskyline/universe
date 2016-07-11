'use strict';
app.run(function(storage){

  var mondayPlanData = {
    "周一事项":{
      "Relocation服务熟悉":{
        "Relocation-Http服务熟悉":{
          "Resin下服务":{_dl: "2016/7/11 12:00", _f: true},
          "Play下服务":{_dl: "2016/7/11 15:00", _f: true},
          "两者服务方案对比":{_dl: "2016/7/11 17:00", _f: true},
          "MT层服务":{_dl: "2016/7/11 19:00", _f: true},
          "Http服务的拦截器逻辑":{_f: true}
        }
      },
      "Https方案调研":{
        "Nginx层方案":{_f: true},
        "Interceptor层方案":{_f: true},
        "Relocation-Http服务修改方案":{_f: true},
        "MT层修改方案":{_f: true},
        "区域间方案":{_c:"区域间跳转的时候，是否需要知道对端的HTTPS的支持情况", _f: true},
        "客户端支持能力调研":{
          "HTTP标准Redirect能力调研":{}
        },
        _dl: "2016/7/11 20:00"
      },
      "方案Wiki文档":{_dl: "2016/7/11 21:00", _f: 0.8},
      "整理DeadlineBar代码":{_dl:"2016/7/11 22:00"},
      "D3.js小总结":{}
    }
  };

  storage.register("周一事项", mondayPlanData, true, "2016/7/11 10:00", "2016/7/11 23:00");
});

'use strict';
app.run(function(storage){

  var mondayPlanData = {
    "周一事项":{
      "Relocation服务熟悉":{
        "Relocation-Http服务熟悉":{
          "Resin下服务":{_ac: true},
          "Play下服务":{},
          "两者服务方案对比":{},
          "MT层服务":{},
          _dl: "2016/7/11 12:00",
          _ac: true
        }
      },
      "Https方案调研":{

      }
    }
  };

  storage.register("周一事项", mondayPlanData, true, "2016/7/11 10:00", "2016/7/11 21:00");
});

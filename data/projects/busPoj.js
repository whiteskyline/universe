'use strict';
app.run(function(storage){

  var exeServPoj = {
    "Bus服务":{
      "行研": {
        "现行公交公司情况": {_f: true},
        "地铁周边交通情况": {_c: "情况过多"},
        "地铁人流量情况": {_f: true},
        "覆盖成本分析": {_f: true},
        "车辆利用率分析": {},
        "竞品调查": {
          "车来了": {},
          "滴滴班车": {}
        }
      },
      "自身优势": {
        "技术优势": {},
        "财务优势": {},
        "政府资源优势": {}
      }
    }
  };

  storage.register("Executor服务", exeServPoj, false, "2016/8/1", "2016/8/16", storage.LEVEL_POJ);
});

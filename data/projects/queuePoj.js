'use strict';
app.run(function(storage){

  var queuePojData = {
    "EMQ项目": {
      "MACD":{},
      "BOLL":{},
      "量能":{}
    }
  }

  storage.register("EMQ项目", queuePojData, true, "2016/7/1", "2016/7/16");
});

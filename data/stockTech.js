app.run(function(storage){

  var stockData = {
    "股票技术": {
      "MACD":{},
      "BOLL":{},
      "量能":{}
    }
  }

  storage.register("股票技术", stockData, false, "2016/3/1", "2016/10/1");
});

app.run(function(storage){

  var stockData = {
    "股票理财": {
      "MACD":{},
      "BOLL":{},
      "量能":{}
    }
  }

  storage.register("股票", stockData);
});

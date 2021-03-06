app.run(function(storage){

  var stockData = {
    "股票技术": {
      "实战操作总结": {
        "技术指标操作": {
          "均线系统": {},
          "BOLL线系统": {},
          "指标联动与互洽":{}
        }
      },
      "未消化技术": {
        "财经节目": {
          "天下财经":{
            "2016/07/08":{
              "超级小盘股以及活跃性":{_c: "流通2亿以下，总市值70亿以下，有热点或者预期"},
              "怎么观察每天的涨幅板":{_c: "能获得什么信息"},
              "强股类型":{
                "强者恒强": {_c: "强势股票经过调整，创历史新高，什么是历史新高，什么情况下可以追，追的概率多少"},
                "吸筹转强": {_c: "窄幅震荡，并且涨停开局，那么以后将比较可观，但是有没有反例？"}
              },
              "看主力的心理，还是心理的结果": {_c: "主力心理可能有10种想法，但是总要落实到行动上，而行动只有一种，因此应该是主力行为心理学"},
              "均线应该怎么设置": {_c: "常用5/10/20来做"},
              "反弹如何形成的": {_c: "某些强势股票，回调结束反弹，引起板块效应，从而带动大盘反弹，因此在反弹中观察过滤先涨的板块，股票"}
            }
          }
        },
        "书籍": {},
        "专栏": {}
      }
    }
  }

  storage.register("股票技术", stockData, false, "2016/7/1", "2016/10/1", storage.LEVEL_POJ);
});

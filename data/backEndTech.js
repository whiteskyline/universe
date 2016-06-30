app.run(function(storage){

  var backEndTechData = {
    "服务端开发": {
      "大规模计算":{},
      "商业事务技术":{},
      "架构能力":{},
      "通信":{
        "基础通信协议": {
          "应用层协议": {"HTTP协议":{}, "Thrift协议":{}},
          "网络层协议": {
            "UDP协议":{"_dl": "2016/7/1", "_f": true, "_u":["baidu.com"], "_c": "数据", "_b": ["数据结构"], "_t": ["A"]},
            "TCP协议":{}
          }
        }
      },
      "组件技术":{
        "接入组件":{
          "CDN技术":{},
          "前端服务器技术":{"_t":["Nginx"]},
          "应用服务器技术":{"_t":["Apache Tomcat", "Resin", "Play Framework"]}
        },
        "中间件":{
          "RPC技术":{
            "Thrift":{},
            "Protobuf":{}
          }
        },
        "基础组件":{
          "数据库技术":{
            "MySQL":{"_t":["容灾", "性能优化"]}
          },
          "NoSQL技术":{
            "HBase":{},
            "MongoDB":{}
          },
          "缓存技术":{
            "本地缓存技术":{},
            "分布式缓存技术":{}
          },
          "Queue":{
            "Application Queue": {},
            "Stream Queue": {"_t": ["Kafka"]}
          },
          "安全技术":{},
          "运维支持技术":{},
          "服务发现技术":{}
        },
        "分布式": {"_t": ["同步协议"]},
        "异步化技术": {}
      }
    }
  }

  storage.register("服务端开发", backEndTechData);
});

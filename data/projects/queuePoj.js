'use strict';
app.run(function(storage){

  var queuePojData = {
    "EMQ项目": {
      "代码检查与单元测试":{
        "_dl": "2016/7/6",
        "micloud-emq-common":{
          "_dl": "2016/7/5 12:00",
          "cache层测试完毕": {
            "_dl": "2016/7/5 00:00",
            "PartitionTagScanner及底层":{"_f": true},
            "PartitionScanner":{"_f": true},
            "QueueScanner":{"_f": true}
          },
          "service层测试完毕": {"_dl": "2016/7/5 10:00"}
        },
        "micloud-emq-service":{
          "_dl": "2016/7/5 16:00"
        },
        "micloud-emq-message":{
          "_dl": "2016/7/5 22:00"
        }
      },
      "集成功能检查与测试":{
        "_dl": "2016/7/9 10:00",
        "服务集成":{
          "底层HBase服务部署":{"_dl": "2016/7/8 12:00"},
          "FE与MT的Thrift服务启动":{"_dl": "2016/7/8 16:00"},
          "组件间服务发现":{"_dl": "2016/7/8 20:00"},
          "Client调用结果检查":{"_dl": "2016/7/9"}
        },
        "Client集成":{
          "_dl": "2016/7/10",
          "一致性Hash支持":{},
          "ZK不使用框架":{}
        }
      },
      "集成性能测试":{"_dl": "2016/7/11"},
      "Admin工具搭建":{
        "History记录与更新通知":{"_dl": "2016/7/9 18:00"},
        "Admin工具":{"_dl": "2016/7/12 10:00"},
        "Clean工具服务":{}
      },
      "接入与验证":{
        "_dl": "2016/7/15",
        "Staging平台搭建":{"_dl": "2016/7/12 18:00"},
        "相册服务接入编码":{"_dl": "2016/7/13 12:00"},
        "相册服务接入测试":{"_dl": "2016/7/14 18:00"}
      },
      "待定":{
        "LongPooling功能":{}
      }
    }
  }

  storage.register("EMQ项目", queuePojData, false, "2016/7/1", "2016/7/16", storage.LEVEL_POJ);
});

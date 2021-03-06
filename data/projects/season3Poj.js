'use strict';
app.run(function(storage){

  var season3PojData = {
    "Q3整体工作":{
      "_dl": "2016/9/30",
      "安全与隐私": {
        "KeyCenter": {
          "HSM": {},
          "KeyChain": {}
        },
        "HTTPS":{
          "AWS启用":{_f: true}
        },
        "Relocation服务": {
          "Cache机制升级": {_f: true}
        },
        "数据备份":{
          "列表补全":{"_c": "用户列表尚未补全"},
          "HBase冷备份":{},
          "MySQL冷备份":{}
        }
      },
      "基础架构以及组件":{
        "跨机房Queue":{
          "解决假死问题":{"_f": true},
          "合并平滑扩展特性":{"_f": 0},
          "日志等小问题":{
            "配置更改为application.conf":{},
            "日志内容更改":{_f: true}
          }
        },
        "总体服务运行架构":{
          "全链路服务发现":{
            "FE的服务注册与发现":{
              "代码完成": {_f: true},
              "全面服务接入": {}
            }
          },
          "Play异步化":{
            "更多业务接入":{},
            "Play版本升级":{}
          },
          "Client SDK":{
            "业务流程验证":{_f: 0.4},
            "开发客户端接入":{}
          },
          "ZK配置收集管理":{
            "收集所有配置":{},
            "制定统一管理方案":{}
          }
        }
      },
      "弹性计算":{
        "基础服务的Docker环境设计":{
          "Docker环境组件编码":{}
        },
        "服务容器化支持":{}
      }
    }
  };

  storage.register("Q3整体工作", season3PojData, false, "2016/7/1", "2016/9/30", storage.LEVEL_POJ);
});

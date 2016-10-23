'use strict';
app.run(function(storage) {

    var clientSdkPoj = {
        "Client-SDK": {
            "客户端": {
                "生成框架": {
                    "稳定初步生成代码": {_f: true},
                    "解决Batch请求架构": {_f: true},
                    "解决参数是Thrift派生的情况": {}
                },
                "Base层实现": {
                    "责任链": {_f: true},
                    "Passport协议实现": {_f: true},
                    "Relocation协议实现": {_f: true},
                    "Network协议实现": {_f: true},
                    "Comments更改": {_f: true}
                },
                "Test环境实现": {
                  "责任链": {_f: true},
                  "Passport实现": {_f: true},
                  "Relocation协议实现": {_f: true},
                  "Network协议实现": {_f: true},
                  "comments更改": {_f: 0.8}
                },
                "客户端": {
                  "架构Review": {_f: 0.4}
                },
                "架构测试": {
                  "Unit测试": {
                    "Passport测试": {_f: true},
                    "Relocation测试": {_f: true},
                    "Network测试": {_f: true},
                    _dl: "16 10/18"
                  }
                }
            },
            "Play端": {
              "当前Wifi-FE的形成分析": {_dl: "16/10/22"},
              "模板定义内容分析": {_dl: "16/10/22"},
              "实现方案确定": {_dl: "16/10/23"},
              "实现深度探讨": {_dl: "16/10/23"},
              "生成框架": {
                "生成routes文件": {_dl: "16/10/24"},
                "生成Controller文件": {_dl: "16/10/26"},
                "添加剩余信息": {_dl: "16/10/30"},
                "Review": {_dl: "16/10/31"}
              }
            }
        }
    };

    storage.register("Client-SDK", clientSdkPoj, false, "2016/9/20", "2016/10/30", storage.LEVEL_POJ);
});

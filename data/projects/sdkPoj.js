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
                    "Comments更改": {}
                },
                "Test环境实现": {
                  "责任链": {_f: true},
                  "Passport实现": {_f: true},
                  "Relocation协议实现": {_f: true},
                  "Network协议实现": {_f: true},
                  "comments更改": {}
                },
                "客户端": {
                  "架构Review": {}
                },
                "架构测试": {
                  "Unit测试": {
                    "Passport测试": {},
                    "Relocation测试": {},
                    "Network测试": {},
                    _dl: "16 10/18"
                  }
                }
            },
            "Play端": {
              "生成框架": {}
            }
        }
    };

    storage.register("Client-SDK", clientSdkPoj, false, "2016/9/20", "2016/10/30", storage.LEVEL_POJ);
});

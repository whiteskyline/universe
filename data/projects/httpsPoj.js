'use strict';
app.run(function(storage){

  var httpsPojData = {
    "HTTPS":{
      "旧服务方案":{
        "Nginx服务方案":{_f: true},
        "FE服务方案":{_f: true},
        "支撑性业务方案":{
          "Relocation服务":{
            "Relocation-Http服务": {
              "Resin下服务":{_f: true},
              "Play下服务":{_f: true},
              "新旧架构服务比对":{_f: true}
            },
            "Relocation-Interceptor": {_f: true},
            "Relocation参与整体服务流程": {_f: true},
            "_dl": "2016/7/10"
          }
        },
        "_dl": "2016/7/11"
      },
      "新服务方案确认":{
        "Nginx服务方案设计":{_f: true},
        "FE服务方案设计":{_f: true},
        "支撑性业务方案设计":{
          "Relocation服务迁移方案":{_f: true}
        },
        "迁移过程设计":{
          "服务器迁移过程设计":{_f: true},
          "客户端支持过程设计":{_f: true}
        },
        "新服务方案对IAuth/OAuth方向的依赖": {
          "调查目前使用IAuth/OAuth服务的情况":{_f: 0.5},
          "验证新方案对于原始的逻辑不会产生影响":{}
        },
        "_dl": "2016/7/15"
      },
      "代码级别工作":{
        "代码工作量预估":{
          "FE-Play上线需要的工作分解与时间预估":{_f: true},
          "FE支持HTTPS需要的工作分解与时间预估":{_f: true},
          "Relocation-Interceptor支持HTTPS需要的工作分解与时间预估":{_f: true}
        },
        "Relocation-FE-Play验证并上线": {
          "Onebox验证测试":{
            "添加Play的测试":{},
            _dl: "2016/7/15"
          },
          "上线Staging":{_dl: "2016/7/15"},
          "上线Production":{_dl: "2016/7/18"},
          _dl: "2016/7/19"
        },
        "Relocation-FE服务支持HTTPS开发并上线Staging": {
          "逻辑开发与测试":{_dl:"2016/7/21"},
          "上线Staging":{_dl:"2016/7/22"},
          "上线Production":{_dl:"2016/7/26"},
          _dl: "2016/7/26"
        },
        "Relocation-Interceptor支持HTTPS并上线Staging": {
          "Rose逻辑开发":{_dl:"2016/7/28"},
          "Find更新Interceptor":{_dl:"2016/8/1"},
          "Find上线Production":{_dl:"2016/8/2"},
          "Play逻辑开发":{_dl:"2016/7/29"},
          "Wifi更新版本":{_dl:"2016/8/1"},
          "Wifi上线Production":{_dl:"2016/8/2"},
          _dl: "2016/8/2"
        }
      },
      "退出标准":{
        "服务正式发版": {
          "服务端":{
            "Find/Wifi Nginx开启https支持":{},
            "线上增加Find/Wifi开启https配置":{}
          },
          "客户端":{
            "MIUI发布新版本确认流量正常":{}
          }
        },
        _dl: "2016/8/12"
      },
      _dl: "2016/8/12"
    }
  };

  storage.register("HTTPS", httpsPojData, true, "2016/7/1", "2016/8/15");
});

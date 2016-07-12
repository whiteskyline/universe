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
        "_dl": "2016/7/15"
      },
      "代码级别工作":{
        "Relocation-FE-Play验证并上线": {_dl: "2016/7/15"},
        "Relocation-FE服务支持HTTPS开发并上线Staging": {_dl: "2016/7/20"},
        "Relocation-Interceptor支持HTTPS并上线Staging": {_dl: "2016/7/22"}
      },
      "迁移与全面上线":{
        "支撑性业务迁移":{
          "迁移准备工作":{},
          "迁移上线":{}
        },
        "FE服务迁移":{
          "迁移准备工作":{},
          "SMS":{
            "FE迁移":{},
            "Nginx配置切换":{}
          },
          "Phonecall":{
            "FE迁移":{},
            "Nginx配置切换":{}
          },
          "其余服务":{
          }
        }
      }
    }
  };

  storage.register("HTTPS", httpsPojData, true, "2016/7/1", "2016/8/15");
});

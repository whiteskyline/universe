'use strict';
app.run(function(storage){

  var exeServPoj = {
    "Bus服务":{
      "行研": {
        "现行公交公司情况": {_f: true},
        "地铁周边交通情况": {_c: "情况过多"},
        "地铁人流量情况": {_f: true},
        "覆盖成本分析": {_f: true},
        "车辆利用率分析": {_f: true},
        "竞品调查": {
          "车来了": {},
          "滴滴班车": {},
          "接我": {}
        }
      },
      "技术实现": {
        "Version 1": {
          "支付": {
            "打通微信公众号接口": {
              "使用基础组件做一个简单页面": {_f: true},
              "开通微信公众号": {_f: true},
              "阅读微信公众号文档": {_f: true},
              "微信页面支付": {},
              "网页支付宝支付": {},
              "APP支付": {},
              _dl: "2016/10/13"
            },
            "两种支付方式支持": {
              "用户充值": {},
              "单次票务支付": {},
              _dl: "2016/10/14"
            },
            "用户登录API": {}
          },
          "设置目标地址": {
            "获取当前地铁站": {},
            "获取当前地铁站周边路点": {},
            _dl: "2016/10/15"
          },
          "乘车流程": {
            "买票流程": {
              "买票页面": {_f: true},
              "买票脚本": {},
              "买票API": {},
              _f: 0.5
            },
            "验票流程": {
              "验票页面": {_f: true},
              "生成车票二维码": {},
              "司机端验证二维码": {}
            },
            "车票列表": {
              "车票列表API": {},
              ""
              "验票": {}
            },
            _dl: "2016/10/17"
          },
          "导航地图": {
            "导航至上车点": {},
            "司机导航": {},
            _dl: "2016/10/19"
          },
          "支持车站/线路表": {
            _dl: "2016/10/20"
          }
        }
      }
    }
  };

  storage.register("Bus服务", exeServPoj, false, "2016/10/12", "2016/10/20", storage.LEVEL_POJ);
});

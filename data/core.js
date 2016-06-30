var dataCoreDataNewFormat = {
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

function transformRoot(data) {
  for (var key in data) {
    return transformDataFormat(key, data[key]);
  }
}

function transformDataFormat(name, data) {
  var node = {"name": name}
  var info = filterInfo(data);
  node.detail = info.detail;
  if (info.children.length >0) node.children = info.children;

  return node;
}

function filterInfo(data) {
  var children = []
  var detail = {}
  for (var key in data) {
    if (!collectDetail(key, data[key], detail)) {
      children.push(transformDataFormat(key, data[key]));
    }
  }

  return {"children": children, "detail": detail};
}

function collectDetail(key, value, detail) {
  if (key.startsWith("_")) {
    if (key == "_d") {
      for (k in value) {
        collectDetail(k, value[k], detail);
      }
    }
    if (key == "_dl") {
      detail.deadline = value;
    }
    if (key == "_u") {
      detail.urls = value;
    }
    if (key == "_b") {
      detail.books = value;
    }
    if (key == "_t") {
      detail.techkeys = value;
    }
    if (key == "_c") {
      detail.comment = value;
    }
    if (key == "_f") {
      detail.finished = value;
    }
    return true;
  }
  return false;
}

app.service("storage", function(data){
  var registeredFields = [];
  var register = function(key, data) {
    registeredFields.push({"key": key, "data": data});
  }
  var getFields = function() {
    return registeredFields;
  }
  var select = function(data) {
    data.setData(transformRoot(data));
  }

  return {
    register: register,
    getFields: getFields,
    select: select
  };
});

app.controller("fieldPanelCtrl", function($scope, storage, data){
  'use strict'
  storage.register("服务端开发", dataCoreDataNewFormat);
  storage.register("前端开发", {});
  $scope.fields = storage.getFields();
  $scope.selectedField = "";
  $scope.$watch('selectedField', function(newValue, oldValue, scope){
    console.log(newValue, oldValue, scope);
    if (newValue === oldValue) {
      return;
    }
    data.setData(transformRoot(newValue));
  }, true);
});

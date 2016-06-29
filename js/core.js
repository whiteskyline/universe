/**
 * filename:    core.js
 * author:      linmingxing@xiaomi.com
 * date: 2016-6-28
 * comment: 定义系统内部的公用组件
 */

var app = angular.module("universeApp", [])

/**
 * 测试一下简化的格式
 */
var coreData = {
  "组件技术": {
    "接入组件": {
      "CDN技术": {},
      "前端服务器技术": {"Nginx":{}},
      "应用服务器技术": {"Apache Tomcat":{}, "Resin": {}, "Play Framework": {}}
    },
    "_d": {"_f": true, "_dl": "2016/7/1"}
  },
  "_d":{}
};

console.log("date core", coreData);
function filterCoreData(coreData) {
  for (var key in coreData) {
    console.log("kv:", key, coreData[key]);
  }
}

filterCoreData(coreData);

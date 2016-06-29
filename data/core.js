<!-- start of 通信技术 -->
var communicationTech = {
  "name": "通信",
  "children": [
    {"name": "基础通信协议", "children":[
      {
        "name": "应用层协议",
        "children":[
          {"name": "HTTP协议"},
          {"name": "Thrift协议"}
        ]
      },
      {
        "name": "网络层协议",
        "children": [
          {"name": "UDP协议"},
          {"name": "TCP协议"}
        ]
      }
    ]}
  ]
};
<!-- end of 通信技术 -->

<!-- start of 数据库技术 -->
var databaseTech = {
  "name": "数据库技术",
  "children": [
    {"name": "MySQL", "children": [
      {"name": "容灾"},
      {"name": "性能优化"}
    ]}
  ]
}
<!-- end of 数据库技术 -->

<!-- start of 组件技术 -->
var moduleTech = {
  "name": "组件技术",
  "children": [
    <!-- start of 接入组件 -->
    {
      "name": "接入组件",
      "children": [
        {"name": "CDN技术"},
        {"name": "前端服务器技术", "t": ["Nginx"]},
        {"name": "应用服务器技术", "t": ["Apache Tomcat", "Resin", "Play Framework"]}
      ]
    }, <!-- end of 接入组件 -->
    <!-- start of 中间件 -->
    {
      "name": "中间件",
      "children": [
        {"name": "RPC技术", "children":[
          {"name": "Thrift"},
          {"name": "Protobuf"}
        ]}
      ]
    },<!-- end of 中间件 -->
    <!-- start of 基础组件 -->
    {
      "name": "基础组件",
      "children": [
        databaseTech,
        {
          "name": "NoSQL技术",
          "children": [
            {"name": "HBase"},
            {"name": "MongoDB"}
          ]
        },
        {
          "name": "缓存技术",
          "children": [
            {"name": "本地缓存技术"},
            {"name": "分布式缓存技术"}
          ]
        },
        {
          "name": "Queue",
          "children": [
            {"name": "Application Queue"},
            {"name": "Stream Queue", "t":["Kafka"]}
          ]
        },
        {"name": "安全技术"},
        {"name": "运维支持技术"},
        {"name": "服务发现技术"}
      ]
    },<!-- end of 基础组件 -->
    {
      "name": "分布式", "t": ["同步协议"]
    },
    {
      "name": "异步化技术"
    }
  ]
}
<!-- end of 组件技术 -->

var dataCoreData = {
"name": "服务端开发",
"children": [
  communicationTech,
  moduleTech,
  {"name": "大规模计算"},
  {"name": "商业事务技术"},
  {"name": "架构能力"}
]
};

var dataService;
function initData(data) {
  data.setData(dataCoreData);
}

app.run(function(data){
  console.log("data service is added", data)
  dataService = data;
})

window.onload = function(){
  console.log("window loaded.")
  dataService.setData(dataCoreData);
};

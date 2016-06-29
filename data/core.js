
var dataCoreData = {
"name": "服务端开发",
"children": [
  {
    "name": "Front",
    "children": [
      {
        "name": "Website",
        "children": [
          { "name": "World", "urls": ["http://baidu.com"], "books":["乌合之众"], "t": ["很好"], "comment":"不错的学习", "dl": "2016/7/1"},
          { "name": "Sport" },
          { "name": "Politics", "f": 1},
          { "name": "Science", "f": 1},
          { "name": "Business", "f": 1},
          { "name": "Technology", "f": 1},
          { "name": "Health", "f": 1}
        ]
      }
    ]
  },
  {
    "name": "数据库"
  }
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

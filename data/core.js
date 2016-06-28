
var dataCoreData = {
"name": "服务端开发",
"children": [
  {
    "name": "Front",
    "children": [
      {
        "name": "Website",
        "children": [
          { "name": "World" },
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

function initData(data) {
  data.setData(dataCoreData);
}

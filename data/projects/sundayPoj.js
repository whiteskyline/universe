'use strict';
app.run(function(storage){

  var sundayPojData = {
    "周日事项":{
      "Universe APP升级":{
        "Active状态":{
          "Active状态数据支持":{_f: true},
          "Active高亮显示":{_c: "最好做成心跳型", _f: true},
          "相关连线高亮显示":{_f: true},
          _dl: "2016/7/10 15:30"
        },
        "deadlineBar升级":{
          "重叠避免":{},
          "不同显示状态支持":{
            "开始日期可定义":{_c: "开始显示/从今天开始", _ac: true, _f: true},
            "显示开始前的未完成项目":{_f: true},
            "日期显示范围可调":{_c: "从当前后一天/从当前后三天/周/月/三月/年"},
            _ac: true
          },
          _dl: "2016/7/11 1:30"
        }
      },
      "服务器沙盒化":{
        "初步调研":{},
        _dl: "2016/7/11 2:30"
      }
    }
  };

  storage.register("周日事项", sundayPojData, true, "2016/7/10 14:00", "2016/7/11 3:00");
});

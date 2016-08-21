'use strict';
app.run(function(storage){

  var exeServPoj = {
    "Executor服务":{
      "设计流程": {
        "服务执行流程设计": {_f: true},
        "简单类接口设计": {_f: true},
        "时间估算": {
          _c: "ExecutorPool: 2hours, EnvironmentService: 2hours, QueueService: 2hours"
        }
      },
      "项目编写": {
        "项目Init": {
          "Thrift Init": {_f: true},
          "Maven Init": {_f: true}
        },
        "Thrift Executor Service 编写": {
          "编写": {},
          "测试": {}
        },
        "ExecutorPool编写":{
          "编写": {_f: true},
          "测试": {_f: true}
        },
        "EnvironmentService编写":{
          "编写": {_f: true},
          "测试": {_f: true}
        },
        "QueueService":{
          "编写": {_f: true},
          "测试": {_f: true}
        },
        "序列号生成器": {
          "编写": {_f: true},
          "测试": {_f: true}
        },
        "ExecutorService编写": {
          "编写": {_f: 0.5},
          "测试": {},
          _ac: true
        }
      },
      "调试运行": {

      }
    }
  };

  storage.register("Executor服务", exeServPoj, false, "2016/8/1", "2016/8/16", storage.LEVEL_POJ);
});

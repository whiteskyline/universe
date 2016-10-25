'use strict';
app.run(function(storage, weeklyUtil) {

    var weekPlanData = {
        "周计划": {
            "工作": {
                "去除Relocation服务的userId信息": {
                  _dl: "Tue"
                },
                "ClientSDK工作": {
                    "客户端": {
                        "Swift类型参数生成": {_dl: "Wed"},
                        "Play框架生成初步": {_dl: "Tue"}
                    },
                    "Play端": {
                      "生成框架": {},
                      "Batch操作生成": {},
                      "Swfit类型生成": {},
                      _dl: "Thu"
                    },
                    "使用框架生成新的Gallery接口": {_dl: "Fri"}
                },
                "UserMappingId转换接口": {
                    _c: "提供micloud-infra-api进行所有的一些内部请求的处理",
                    _dl: "Fri"
                }
            },
            "商业": {
                "联系设计类人员": {
                    "设计风格": {},
                    "最终实现人员": {},
                    _dl: "Thu"
                }
            },
            "学习": {
                "Redis使用学习": {
                    _dl: "Sun 12:00",
                    _f: 0.4
                },
                "机器学习第一章完成": {
                    _dl: "Wed 12:00",
                    _f: 0.6
                },
                "机器学习第二章完成": {_dl: "Thu"},
                "机器学习第三章完成": {_dl: "Sun"},
                "阅读消费者心理需求": {
                  "75%": {
                    _dl: "Thu"
                  }
                },
                "知乎Live": {
                  "李笑来": {}
                }
            }
        }
    };

    weeklyUtil.registerWeeklyPlan(weekPlanData, "isoWeek")
});

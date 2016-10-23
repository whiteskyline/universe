'use strict';
app.run(function(storage, weeklyUtil) {

    var weekPlanData = {
        "周计划": {
            "工作": {
                "ClientSDK工作": {
                    "客户端": {
                        "test环境基础测试": {
                            "Mock测试框架学习": {_f: true},
                            "Relocation测试": {_f: true},
                            "Passport测试": {_f: true},
                            "Network测试": {_f: true},
                            _dl: "Tue"
                        },
                        "Comments修改": {_f: true},
                        "客户端Review": {_dl: "Wed", _f: true},
                        "Swift类型参数生成": {_dl: "Wed"},
                        "多账户实现确认": {_f: true},
                        "Play框架生成初步": {}
                    },
                    "Play端": {
                      "生成框架": {},
                      "Batch操作生成": {},
                      "Swfit类型生成": {},
                      _dl: "Thu"
                    }
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

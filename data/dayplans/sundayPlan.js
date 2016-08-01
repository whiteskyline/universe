'use strict';
app.run(function(storage, dailyUtil) {

    var sundayPlanData = {
        "周日事项": {
            "Universe APP功能": {
                "理财功能细化": {
                    "投资账户来源细化": {
                        _c: "将来源分为工资/投资收益，投资亏损进行展示"
                    },
                    _dl: "22:00"
                },
                "人脉管理功能": {
                    _dl: "23:00"
                },
                "添加阅读目标管理": {_c: "归类到个人当中"},
                "将项目管理分为个人与工作": {}
            },
            "沙盒程序编写": {
              "编写完成lpcap程序": {
                _ac: true,
                _dl: "18:00"
              },
              "通过lpcap运行首个node程序":{},
              "编写Job管理服务": {
                _c: ""
              }
            }
        }
    };

    dailyUtil.registerDailyPlan(sundayPlanData, "01:00", "23:00", "Sunday", "day")
});

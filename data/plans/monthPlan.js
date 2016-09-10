'use strict';
app.run(function(storage, monthlyUtil){

  var monthPlanData = {
    "月计划":{
      "Rose逻辑开发": {_dl: "1 18", _f: true},
      "Play逻辑开发": {_dl: "2 16", _f: true}
    }
  };

  monthlyUtil.registerMonthlyPlan(monthPlanData, "month")
});

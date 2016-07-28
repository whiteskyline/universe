'use strict';
app.run(function(storage, weeklyUtil){

  var weekPlanData = {
    "周计划":{
      "Rose逻辑开发": {_dl: "Thu 18", _f: true},
      "Play逻辑开发": {_dl: "Fri 16"}
    }
  };

  weeklyUtil.registerWeeklyPlan(weekPlanData, "week")
});

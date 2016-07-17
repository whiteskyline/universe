app.service("wacai", function($q, $http, bus){

  var DATE_FORMAT = "YYYY-MM-DD"
  var BUDGET_COLOR = "#99CCFF"
  var OUTCOME_COLOR = "#E6109B"

  var commonHeaders = {'Access-Control-Allow-Origin': "*", 'Content-Type': 'application/x-www-form-urlencoded'}
  var loginUrl = "https://user.wacai.com/login/all"
  var loginData = {"name": "ming.horizon@gmail.com", "pwd": "9d34FmNgAXq1c+IYsreAnA==", "autoLogin":1}
  var listOutcomeUrl = "https://www.wacai.com/biz/ledger_list.action"
  var listOutcomeData = {"cond.date": "2016-07-01", "cond.date_end": "2016-07-31", "cond.withDaySum": "true", "pageInfo.pageIndex": 1, "cond.reimbursePrefer": "0"}

  var startDate;
  var endDate;

  var totalBudger = 5900
  var

  /*
   * internal function section
   */

   // init start date and end date
   var initData = function() {
     startDate = new moment()
     endDate = new moment()
     startDate.startOf("month")
     endDate.endOf("month")

     listOutcomeData["cond.date"] = startDate.format(DATE_FORMAT)
     listOutcomeData["cond.date_end"] = endDate.format(DATE_FORMAT)
     listOutcomeData["pageInfo.pageIndex"] = 1
   }

  // encode to form data
  var transformFormData = function(data) {
    var str = [];
    for (var key in data) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    }
    return str.join("&")
  }

  // queries: url query, data: form data
  var request = function(url, method, queries, data) {
    if (queries != null && queries.length > 0) {
      var queryString = []
      for (var key in queries) {
        queryString.push(key + "=" + queries[key])
      }
      url = url + "?" + queryString.join("&")
    }

    var requestObj = {"url": url, "method": method, "headers": commonHeaders}
    if (data != null) {
      requestObj.data = data
      requestObj.transformRequest = transformFormData
    }

    return $http(requestObj)
  }

  // public functions
  var createMonthlyBudgetData = function() {
    var totalDays = endEdge.date() - startEdge.date() + 1
    var monthlyBudgetData = {
      name: "月预算累积",
      color: "#99CCFF",
      data:[]
    }

    var nextDate = startEdge.clone()
    var averageDailyBudget = budget / totalDays;
    for (var idx = 0; idx < totalDays; idx++) {
      nextDate.date(idx + 1)
      monthlyBudgetData.data.push([nextDate.valueOf(), averageDailyBudget * (idx * 1)])
    }

    return monthlyBudgetData
  }

  return {
        setData: setData,
        getData: getData,
        emitRefresh: emitRefresh
  };

});

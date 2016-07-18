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

  var totalBudget = 5900

  var totalPageCount
  var ledgers = []

  var onDataLoaded

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

  var login = function() {
    request(loginUrl, "POST", null, loginData)
    .then(function(resp){
      console.log("login success", resp)
      request(listOutcomeUrl, "POST", {"timsmp": new moment().valueOf()}, listOutcomeData)
      .then(loadOutcomeData)
    })
  }

  var loadOutcomeData = function(resp) {
    var data = resp.data
    totalPageCount = data.pi.pageCount

    for (var idx = 0; idx < data.ledgers.length; idx++) {
      ledgers.push(data.ledgers[idx])
    }

    // 发起下次请求
    if (data.pi.pageNo < data.pi.pageCount) {
      listOutcomeData["pageInfo.pageIndex"] = data.pi.pageNo + 1
      request(listOutcomeUrl, "POST", {"timsmp": new moment().valueOf()}, listOutcomeData)
      .then(loadOutcomeData)
    } else {
      // all data loaded, create charts
      console.log("all ledgers loaded.", ledgers)
      var transformedOutcome = transformOutcomeData(ledgers)
      onDataLoaded(transformedOutcome)
    }
  }

  var transformOutcomeData = function(ledgers) {
    ledgers = ledgers.sort(function(a, b) {
      var aMom = new moment(a.date, "YYYY-MM-DD HH:mm:ss")
      var bMom = new moment(b.date, "YYYY-MM-DD HH:mm:ss")
      return aMom.valueOf() - bMom.valueOf()
    })

    var outcomeLedgers = []
    for (var idx = 0; idx < ledgers.length; idx++) {
      if (ledgers[idx].tag === "支出") {
        outcomeLedgers.push(ledgers[idx])
      }
    }

    var totalOutcome = 0
    var monthlyOutcomeData = {
      name: "月支出累积",
      color: OUTCOME_COLOR,
      data:[]
    }
    for (var idx = 0; idx < outcomeLedgers.length; idx++) {
      var node = outcomeLedgers[idx]
      var mon = new moment(node.date, "YYYY-MM-DD HH:mm:ss")
      totalOutcome = totalOutcome + new Number(node.money)
      monthlyOutcomeData.data.push([mon.valueOf(), totalOutcome])
    }

    return monthlyOutcomeData
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
    var totalDays = endDate.date() - startDate.date() + 1
    var monthlyBudgetData = {
      name: "月预算累积",
      color: BUDGET_COLOR,
      data:[]
    }

    var nextDate = startDate.clone()
    var averageDailyBudget = totalBudget / totalDays;
    for (var idx = 0; idx < totalDays; idx++) {
      nextDate.date(idx + 1)
      monthlyBudgetData.data.push([nextDate.valueOf(), averageDailyBudget * (idx * 1)])
    }

    return monthlyBudgetData
  }

  var setOnDataLoaded = function(func) {
    // load outcome data
    onDataLoaded = func
  }

  return {
        initData: initData,
        createMonthlyBudgetData: createMonthlyBudgetData,
        login: login,
        setOnDataLoaded: setOnDataLoaded
  };

});

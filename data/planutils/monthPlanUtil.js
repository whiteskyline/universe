'use strict';

app.service('monthlyUtil', function(storage){
  'use strict';

  var DAILY_FORMAT = "YYYY-MM-DD HH:mm"

  var transformTime = function(timeSlice, baseMoment, unit) {
    if (typeof(timeSlice) === "string") {
      timeSlice = moment(timeSlice, "DD HH").diff(moment("1", "DD"))
    }
    var resultMoment = baseMoment.clone()

    resultMoment.add(timeSlice)

    return resultMoment
  }

  var adjustNodeTime = function(dataNode, baseMoment, unit) {
    for (var k in dataNode) {
      if (k.startsWith("_")) {
        if (k === "_dl") {
          dataNode._dl = transformTime(dataNode._dl, baseMoment, unit).format(DAILY_FORMAT)
        }
        if (k === "_d" && typeof(dataNode._d._dl) !== "undefined") {
          dataNode._d._dl = transformTime(dataNode._d._dl, baseMoment, unit).format(DAILY_FORMAT)
        }
      } else {
        adjustNodeTime(dataNode[k], baseMoment, unit)
      }
    }
  }

  /*
   * 接口函数
   *
   */
  var selectDefault = function(dataNode) {

  };

  var registerMonthlyPlan = function(dataNode, unit) {
    var rootName;
    for (var v in dataNode) {
      rootName = v;
    }

    var baseMoment = new moment()
    baseMoment.startOf(unit)
    var unitTailMoment = new moment()
    unitTailMoment.endOf(unit)
    var now = new Date()
    var def = baseMoment.valueOf() < now && unitTailMoment.valueOf() > now

    adjustNodeTime(dataNode, baseMoment, unit)
    storage.register(rootName, dataNode, def, baseMoment.format(DAILY_FORMAT), unitTailMoment.format(DAILY_FORMAT), storage.LEVEL_MONTH);
  };

  return {
    selectDefault: selectDefault,
    registerMonthlyPlan: registerMonthlyPlan
  };

});

'use strict';

app.service('dailyUtil', function(storage){
  'use strict';

  var DAILY_FORMAT = "YYYY-MM-DD HH:mm"

  var transformTime = function(timeSlice, baseMoment, unit) {
    if (typeof(timeSlice) === "string") {
      timeSlice = moment(timeSlice, "HH:mm").diff(moment().startOf(unit))
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

  var registerDailyPlan = function(dataNode, startHour, endHour, timeBase, unit) {
    var rootName;
    for (var v in dataNode) {
      rootName = v;
    }

    var baseMoment = new moment()
    baseMoment.day(timeBase).startOf(unit)
    var unitTailMoment = new moment()
    unitTailMoment.day(timeBase).endOf(unit)
    var now = new Date()
    var def = baseMoment.valueOf() < now && unitTailMoment.valueOf() > now

    adjustNodeTime(dataNode, baseMoment, unit)

    var startMoment = transformTime(startHour, baseMoment, unit)
    var endMoment = transformTime(endHour, baseMoment, unit)

    storage.register(rootName, dataNode, def, startMoment.format(DAILY_FORMAT), endMoment.format(DAILY_FORMAT));
  };

  return {
    selectDefault: selectDefault,
    registerDailyPlan: registerDailyPlan
  };

});

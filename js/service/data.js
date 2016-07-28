/*
 * filename:    data.js
 * author:      linmingxing@xiaomi.com
 * date:        2016-6-28
 * comment:
 */
app.service("data", function($q, bus){
  var emited;
  var jsonData;

var setData = function(data) {
  jsonData = data;
  emitRefresh();
}

var getData = function() {
  if (typeof (emited) == 'undefined') {
    emited = {};
    emitRefresh()
  }

  return $q.when(jsonData);
};

var emitRefresh = function() {
  bus.emit('updateData', jsonData);
};

return {
        setData: setData,
        getData: getData,
        emitRefresh: emitRefresh
};

});

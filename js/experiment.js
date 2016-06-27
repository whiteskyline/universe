
var app = angular.module("universeApp", []);

app.controller('skillTreeCtrl', function ($scope, bus) {
    'use strict';
    bus.on('updateData', function(data) {
        $scope.data = angular.copy(data);
    });
});

app.run(function(data, bus){
  data.getData().then(function(d){
    console.log(d);
    bus.emit('updateData', d);
  });
});

/*
 * difine bus service
 */
 app.service("bus",function(){
   'use strict';

    // Simple message bus to event the overhead of angular emit / broadcast
    var subscribers = {};
    var on = function(eventName, callback) {
        if (!subscribers[eventName]) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback);
    };

    var emit = function(eventName, body) {
        if (!subscribers[eventName]) {
            return false;
        }
        subscribers[eventName].forEach(function(callback) {
            callback(body);
        });
        return true;
    };

    return {
        on: on,
        emit: emit
    };
 });

/*
 * define data service
 */
app.service("data", function($q, bus){
  var jsonData = {
  "name": "Root",
  "children": [
    {
      "name": "Front",
      "children": [
        {
          "name": "Website",
          "children": [
            {
              "name": "Home",
              "url": "www.my-media-website.com",
              "host": { "Amazon": ["fo-1", "fo-2"] }
            }
          ]
        }
      ]
    }
  ]
};
var emited;

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
        getData: getData,
        emitRefresh: emitRefresh
};

});

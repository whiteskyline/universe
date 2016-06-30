/**
 * filename:    deadlinePanel.js
 * author:      linmingxing@xiaomi.com
 * date:        2016-6-29
 * comment:     控制截止日期面板的行为
 * will add infos to node:
 * node.techniques: {"name", "deadline"}
 */
app.controller("deadlinePanelCtrl", function($scope, data, bus) {
  'use strict';

  bus.on('updateData', function(data) {
      console.log("deadline scope data will be changed", data);
      $scope.data = angular.copy(data);
      $scope.detail = true;
      $scope.node = {"techniques":getDeadlines(data)};
      // $scope.$digest();
  });

  var getDeadlines = function(data) {
    var deadlines = [];
    collectDeadlines(data, deadlines);

    deadlines.sort(function(a, b){
      return new Date(a.deadline) > new Date(b.deadline);
    });

    return deadlines;
  };

  var collectDeadlines = function(node, results) {
    if (typeof(node.children) !== "undefined") {
      node.children.map(function(child){
        collectDeadlines(child, results);
      });
    }

    if (typeof(node.detail.deadline) !== "undefined") {
      results.push({"name": node.name, "deadline": node.detail.deadline});
    }

  }

  // initData(data);
});

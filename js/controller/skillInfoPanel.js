/**
 * filename:    skillInfoPanel.js
 * author:      linmingxing@xiaomi.com
 * date:        2016-6-28
 * comment:     控制skill面板的行为
 * will add infos to node:
 * node.detail.topsubs
 */
app.controller('skillInfoPanelCtrl', function($scope, $timeout, $window, data, bus){
  'use strict';

  var container = angular.element(document.querySelector('#panel'));
  var graph = document.querySelector('#graph');

  bus.on('updateData', function(data){
    var clonedData = angular.copy(data);
    $scope.data = formatData(clonedData);
  });

  // initData(data);

  function formatData(data) {
    // 递归检查所有的节点的完成情况
    var checkFinishStatus = function(node) {
      var total = 0;
      var finished = 0;

      if (typeof(node.children) == 'undefined') {
        total = 1;
        finished = node.detail.finished;

        if (typeof(finished) != 'undefined' && finished == true) {
          finished = 1;
        } else {
          finished = 0;
        }
      } else {
        node.children.map(function(child){
          var childNode = checkFinishStatus(child);
          total = childNode.detail.total + total;
          finished = childNode.detail.finished + finished;
        });
      }

      node.detail.finished = finished;
      node.detail.total = total;

      return node;
    };

    // 获得每个节点的最紧急的三个子项目
    var checkTopIncompleteChildren = function(node, n) {
      if (typeof(node.children) == 'undefined') {
        return;
      }

      node.children.map(function(child){
        checkTopIncompleteChildren(child, n);
      })

      var copied = angular.copy(node.children.filter(function(n){return n.detail.finished < n.detail.total;}));
      copied.sort(function(a, b){
        return a.detail.finished / a.detail.total - b.detail.finished / b.detail.total;
      });

      node.detail.topsubs = nodesToString(copied.slice(0, n))
      console.log("top incomplete subs", node.detail.topsubs);
    }

    var nodesToString = function(nodes) {
      var result = [];
      nodes.map(function(node){
        result.push(node.name);
      })
      return result;
    }

    checkFinishStatus(data);
    checkTopIncompleteChildren(data, 3);
    return data;
  }

  var getNodeByName = function(name, data) {
    if (data.name === name) {
      return data;
    }
    if (!data.children) return null;
    for (var i = data.children.length - 1; i >= 0; i--) {
      var matchingNode = getNodeByName(name, data.children[i]);
        if (matchingNode) return matchingNode;
    }
  };

  // Events
  container.on('hoverNode', function(event) {
          $scope.node = getNodeByName(event.detail, $scope.data);
          $scope.detail = true;
          $scope.edit = false;
          $scope.$digest();
      });

});

/**
 * filename:    skillInfoPanel.js
 * author:      linmingxing@xiaomi.com
 * date:        2016-6-28
 * comment:     控制skill面板的行为
 */
app.controller('skillInfoPanelCtrl', function($scope, $timeout, $window, data, bus){
  'use strict';

  var container = angular.element(document.querySelector('#panel'));
  var graph = document.querySelector('#graph');

  bus.on('updateData', function(data){
    var clonedData = angular.copy(data);
    $scope.data = formatData(clonedData);
  });

  initData(data);

  function formatData(data) {

    var initDetail = function(node) {
      if (typeof(node.children) !== 'undefined') {
        node.children.map(function(child){
          initDetail(child);
        })
      }

      node.detail = {}
    }

    // 递归检查所有的节点的完成情况
    var checkFinishStatus = function(node) {
      if (typeof(node.children) == 'undefined') {
        if (typeof(node.f) != 'undefined' && node.f == true) {
          node.finished = 1;
          node.total = 1;
        } else {
          node.finished = 0;
          node.total = 1;
        }
        return node;
      }

      node.total = 0;
      node.finished = 0;

      node.children.map(function(child){
        var childNode = checkFinishStatus(child);
        node.total = childNode.total + node.total;
        node.finished = childNode.totla + node.total;
      });

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

      var copied = angular.copy(node.children.filter(function(n){return n.finished < n.total;}));
      copied.sort(function(a, b){
        return a.finished / a.total - b.finished / b.total;
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

    initDetail(data);
    checkFinishStatus(data);
    checkTopIncompleteChildren(data, 3);
  }

});

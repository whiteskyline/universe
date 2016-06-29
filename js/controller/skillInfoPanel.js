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
        node.finished = childNode.finished + node.finished;
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

    // 检查每个节点的技术关键词属性
    var checkTechniqueKeys = function(node) {
      if (typeof(node.children) !== "undefined") {
        node.children.map(function(child){
          checkTechniqueKeys(child);
        });
      }

      if (typeof(node.t) !== "undefined") node.detail.techkeys = node.t;
    }

    var checkDeadline = function(node) {
      if (typeof(node.children) !== "undefined") {
        node.children.map(function(child){
          checkDeadline(child);
        });
      }

      if (typeof(node.dl) !== "undefined") node.detail.deadline = node.dl;
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
    checkTechniqueKeys(data);
    checkDeadline(data);
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

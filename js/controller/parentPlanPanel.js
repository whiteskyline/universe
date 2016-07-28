/**
 * filenmae:    deadlineBar.js
 * author:      linmingxing@xiaomi.com
 * date:        2016-7-27
 * coment:      控制过期时间的改动
 */

 app.controller("parentPlanPanelCtrl", function($scope, bus, storage){

   function collectNodeInfo(data, results, func, trans) {
     if (func(data)) {
       results.push(trans(data))
     }

     if (typeof(data.children) !== "undefined") {
       data.children.forEach(function(ele){
         collectNodeInfo(ele, results, func, trans)
       })
     }

   }

   bus.on('updateData', function(data) {
     if (typeof(data) === 'undefined') {
       return;
     }
     console.log("current data", data)

     var parentLevelData = storage.getLeveledData()
     if (typeof(parentLevelData) === "undefined") {
       $scope.node = null
       return
     }
     var parentName = parentLevelData.key

     var parentPlan = transformDataFormat(parentName, parentLevelData.data[parentName])
     console.log("parent data", parentPlan)

     var trans = function(ele) {
        return ele
     }

     var resultNode = {"name": "父层级计划概览", unfinishedJobs:[], finishedJobs:[], withDeadlines:[], }
     collectNodeInfo(parentPlan, resultNode.unfinishedJobs, function(ele) {
       if (typeof(ele.detail.finished) === "undefined") return true
       return ele.detail.finished < 1
     }, trans)
     collectNodeInfo(parentPlan, resultNode.finishedJobs, function(ele){
       return ele.detail.finished >= 1
     },trans)

     console.log("transed", resultNode)
     $scope.node = resultNode
   });
 });

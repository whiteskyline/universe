/**
 * filenmae:    deadlineBar.js
 * author:      linmingxing@xiaomi.com
 * date:        2016-7-27
 * coment:      控制过期时间的改动
 */

 app.controller("parentPlanPanelCtrl", function($scope, bus, storage){

   function collectNodeInfo(data) {

   }

   bus.on('updateData', function(data) {
     if (typeof(data) === 'undefined') {
       return;
     }
     console.log("current data", data)

     var parentPlan = transformDataFormat()
     console.log("parent data",storage.getLeveledData())
     $scope.node = {"name": "new parent node"}
   });
 });

/**
 * filenmae:    deadlineBar.js
 * author:      linmingxing@xiaomi.com
 * date:        2016-7-4
 * coment:      控制过期时间的改动
 */

 app.controller("deadlineBarCtrl", function($scope, bus){
   var chart;
   bus.on('updateData', function(data) {
     if (typeof(data) === 'undefined') {
       return;
     }
     if (typeof(chart) == 'undefined') {
       chart = d3.chart.deadlineBar("#deadlineBar");
     }

     chart.data(chart.transformData(data));
     d3.select("#deadlineBar").call(chart);
   });
 });

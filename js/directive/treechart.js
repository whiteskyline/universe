app.directive('treechart', function(bus) {
    'use strict';
    console.log("directive treechart is regestered");
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="graph"></div>',
        scope:{
            data: '='
        },
        link: function(scope, element) {
            var chart = d3.chart.architectureTree();

            console.log("watch data");
            // scope.$watch("data", function(data) {
            //     if (typeof (data) === 'undefined') {
            //         return;
            //     }
            //     console.log("data is changed", data);
            //
            //     chart.diameter(960)
            //         .data(scope.data);
            //
            //     d3.select(element[0])
            //         .call(chart);
            // });

            bus.on("updateData", function(data){
              if (typeof (data) === 'undefined') {
                  return;
              }
              console.log("data is changed", data);

              chart.diameter(1280)
                  .data(data);

              d3.select(element[0])
                  .call(chart);
            });

            bus.on('nameFilterChange', function(nameFilter) {
                chart.nameFilter(nameFilter);
            });

            bus.on('technosFilterChange', function(technosFilter) {
                chart.technosFilter(technosFilter);
            });

            bus.on('hostsFilterChange', function(hostsFilter) {
                chart.hostsFilter(hostsFilter);
            });

            bus.on('select', function(name) {
                chart.select(name);
            });

            bus.on('unselect', function() {
                chart.unselect();
            });

        }
    };
});

app.directive('treechart', function(bus) {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="graph"></div>',
        scope:{
            data: '='
        },
        link: function(scope, element) {
            var chart = d3.chart.architectureTree();
            bus.on("updateData", function(data){
              if (typeof (data) === 'undefined') {
                  return;
              }

              var radius = window.top.innerWidth - 520
              if (radius > window.top.innerHeight) radius = window.top.innerHeight
              chart.diameter(radius)
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

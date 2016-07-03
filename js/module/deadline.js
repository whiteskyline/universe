'use strict';
var deadlineBar = function(selector) {

    var deadlineData = {
        "start": "2016/1/1",
        "end": "2016/12/30",
        "nodes": [{
            "name": "开车",
            "deadline": "2016/7/1"
        }, {
            "name": "停车",
            "deadline": "2016/9/1"
        }]
    };
    var yScale;
    var chart;
    var svg;

    var margin = {
        top: 10,
        left: 50,
        bottom: 10,
        right: 10
    }
    var width = 200,
        height = 800;

    var draw = function() {
        if (typeof(yScale) === 'undefined') {
            var dataNodes = angular.copy(deadlineData.nodes);
            dataNodes.push({
                "name": "开始",
                "deadline": deadlineData.start
            });
            dataNodes.push({
                "name": "结束",
                "deadline": deadlineData.end
            });

            dataNodes = dataNodes.sort(function(a, b) {
                return new Date(a.deadline) > new Date(b.deadline);
            });

// yScale = d3.scale.linear()
            yScale = d3.time.scale()
                .range([0, height - margin.top - margin.bottom])
                .domain([new Date(deadlineData.start), new Date(deadlineData.end)]);

            var formatFunc = function(d) {
              var date = new Date(d);
              return (date.getYear()) + 1900 + "-" + (date.getMonth() + 1) + "-" + date.getDate();

            }

            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left")
                .ticks(d3.time.months, 1)
                .tickFormat(formatFunc);

            chart = d3.select(selector)
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            chart.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + margin.left + ",0)")
                .call(yAxis);

            svg = chart.selectAll(".node")
                .data(dataNodes)
                .enter()
                .append("g")
                .attr("class", "node")
                .attr("transform", function(d, i) {
                    return "translate(" + margin.left + "," + yScale(new Date(d.deadline)) + ")";
                });

            svg.append("circle")
                .attr("r", 3.5)
                .style("fill", "#FFFFFF")
                .style("stroke", "#FF0033");

            svg.append("text")
                .attr("x", 10)
                .attr("y", 5)
                .text(function(d) {
                    return d.name
                });
        }



    }

    return {
        draw: draw
    };

}

deadlineBar("#deadlineBar").draw();

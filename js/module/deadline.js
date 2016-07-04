'use strict';
d3.chart = d3.chart || {}

d3.chart.deadlineBar = function(selector) {
    var margin = {
        top: 10,
        left: 30,
        bottom: 10,
        right: 10
    };
    var width = 200,
        height = 800;

    var yScale, yAxis, yAxisElement, svg;
    var colorMaps;
    var deadlineData;

    /**
     * build the chart
     */
    function chart() {
        d3.select(selector).selectAll("svg").remove();
        if (typeof(yScale) === "undefined") {
            yScale = d3.time.scale().range([0, height - margin.top - margin.bottom]);
            svg = d3.select(selector)
                .attr("width", width)
                .attr("height", height)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            yAxis = d3.svg.axis()
                .orient("left")
                .tickFormat(formatDate);

            yAxisElement = svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + margin.left + ",0)")
            colorMaps = d3.scale.threshold()
                .domain([0.2, 0.4, 0.6, 0.8])
                .range(["#FF0033", "#E6109B", "#FFE3FB", "#F2FE28", "#00FF80"]);
        }

        // 绘制
        yScale.domain([new Date(deadlineData.start), new Date(deadlineData.end)]);
        yAxis.scale(yScale).ticks(selectUnit(new Date(deadlineData.start), new Date(deadlineData.end)), 1);
        yAxisElement.call(yAxis);

        var node = svg.selectAll(".node")
            .data(createDatanodes(deadlineData))
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d, i) {
                return "translate(" + margin.left + "," + yScale(new Date(d.deadline)) + ")";
            });
        node.append("circle")
            .attr("r", 3.5)
            .style("fill", "#FFFFFF")
            .style("stroke", function(d) {
                if (d.name === "今天") {
                    return "#00FF80";
                }
                if (d.fperc >= 1) {
                    return "#99CCFF";
                }
                if (d.deadline <= new Date()) {
                    return "#FF0033";
                }

                // 根据fperc返回
                return colorMaps(d.fperc);
            });

        node.append("text")
            .attr("x", 10)
            .attr("y", 5)
            .text(function(d) {
                return d.name
            });
    }

    var selectUnit = function(start, end) {
      var DAY = 24 * 3600 * 1000;
      var WEEK = DAY * 7;
      var MONTH = WEEK * 4;
      var HALF_YEAR = MONTH * 6;
      var range = end - start;
      if (range > HALF_YEAR) return d3.time.months;
      if (range > 2 * MONTH) return d3.time.weeks;
      if (range > WEEK) return d3.time.days;
      return d3.time.days;
    }

    var createDatanodes = function() {
        var dataNodes = angular.copy(deadlineData.nodes);
        dataNodes.push({
            "name": "开始",
            "deadline": deadlineData.start,
            "fperc": 1
        });
        dataNodes.push({
            "name": "结束",
            "deadline": deadlineData.end,
            "fperc": 1
        });
        return dataNodes;
    }

    var formatDate = function(d) {
        var date = new Date(d);
        return (date.getYear()) + 1900 + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    var collectDeadlineNodes = function(data, results, parent) {
        if (typeof(data.detail.deadline) !== "undefined") {
            var name;
            if (typeof(parent) !== "undefined") name = parent.name + "-" + data.name;
            else name = data.name;
            var finishPerc = data.detail.finished / data.detail.total;
            results.push({
                "name": name,
                "deadline": data.detail.deadline,
                "fperc": finishPerc
            });
        }

        if (typeof(data.children) != "undefined") {
            data.children.map(function(child) {
                collectDeadlineNodes(child, results, data);
            })
        }
    }

    chart.data = function(values) {
        if (!arguments.length) return deadlineData;
        deadlineData = values;
        return chart;
    }

    chart.transformData = function(data) {
        var start = data.detail.start;
        var end = data.detail.end;
        console.log("range", start, end);

        var results = [];
        collectDeadlineNodes(data, results);
        results.push({
            "name": "今天",
            "deadline": formatDate(new Date()),
            "fperc": 1
        });
        return {
            "start": start,
            "end": end,
            "nodes": results
        };
    }

    return chart;
};

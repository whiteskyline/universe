'use strict';
d3.chart = d3.chart || {}

d3.chart.deadlineBar = function(selector) {
    var margin = {
        top: 10,
        left: 30,
        bottom: 10,
        right: 10
    };
    var width = 300,
        height = window.top.innerHeight - margin.top - margin.bottom - 100;

    var yScale, yAxis, yAxisElement, svg;
    var colorMaps;

    // 数据域
    var deadlineData;
    var filteredDeadlineData;

    // 处理中间数据
    var currentUnit;

    // 一些选项内容
    var startFromNow = false;
    var displayBeforeNow = true;

    /**
     * build the chart
     */
    function chart() {
        d3.select(selector).selectAll("svg").selectAll(".node").remove();
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

        // 预处理数据
        copyOriginData();
        filterVisableDeadlines();
        setRange();
        currentUnit = selectUnit();
        reduceViewConflict();

        // 绘制
        yScale.domain([filteredDeadlineData.start, filteredDeadlineData.end]);
        yAxis.scale(yScale).ticks(selectUnit(filteredDeadlineData.start, filteredDeadlineData.end), 1);
        yAxisElement.call(yAxis);

        var node = svg.selectAll(".node")
            .data(filteredDeadlineData.nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d, i) {
                return "translate(" + margin.left + "," + yScale(d.deadline) + ")";
            });
        node.append("circle")
            .attr("r", 3.5)
            .style("fill", "#FFFFFF")
            .style("stroke", viewStrokeColor);

        node.append("text")
            .attr("x", 10)
            .attr("y", 5)
            .text(function(d) {return d.name;});
    }

    /*
     * 内部操作函数
     */
    var copyOriginData = function() {
      filteredDeadlineData = angular.copy(deadlineData);
      filteredDeadlineData.nodes.push({
        "name": "当前",
        "deadline": new Date(),
        "fperc": 0
      })
    }

    // 过滤需要显示的节点
    var filterVisableDeadlines = function() {
      // 过滤需要显示的节点
      var resultDeadlines = new Array();
      filteredDeadlineData.nodes.forEach(function (item, index, array) {
        if (startFromNow) {
          if ( !displayBeforeNow && item.deadline < new Date(Date.now() - 1000)) {
            return;
          }
          if (displayBeforeNow && item.fperc >= 1) {
            return;
          }
        }
        resultDeadlines.push(item);
      });

      resultDeadlines.sort(function(a, b){
        return a.deadline - b.deadline;
      });

      filteredDeadlineData.nodes = resultDeadlines;
    }

    // 设置开始和结束时间
    var setRange = function() {
      if (startFromNow) {
        if (displayBeforeNow) {
          filteredDeadlineData.start = filteredDeadlineData.nodes[0].deadline;
        } else {
          filteredDeadlineData.start = new Date();
        }
      }
    }

    // 设置开始和结束时间
    var selectUnit = function() {
      var HOUR = 3600 * 1000;
      var DAY = 24 * 3600 * 1000;
      var WEEK = DAY * 7;
      var MONTH = WEEK * 4;
      var HALF_YEAR = MONTH * 6;
      var range = filteredDeadlineData.end - filteredDeadlineData.start;
      if (range > HALF_YEAR) return d3.time.months;
      if (range > 1.5 * MONTH) return d3.time.weeks;
      if (range > 3 * DAY) return d3.time.days;
      if (range > DAY) return d3.time.hours;
      return d3.time.hours;
    }

    // string to date_end
    var toDate = function(str) {
      var mo = new moment(str, "YYYY-MM-DD HH:mm")
      return new Date(mo.valueOf())
    }

    var reduceViewConflict = function() {
      var timeSpan = (filteredDeadlineData.end - filteredDeadlineData.start) / 100;
      var nodes = filteredDeadlineData.nodes;
      for (var i = 1; i < nodes.length; i++) {
        if (nodes[i].deadline - nodes[i - 1].deadline < timeSpan) {
          nodes[i].deadline = new Date(nodes[i - 1].deadline.getTime() + timeSpan);
        }
      }
    }

    /*
     * 渲染过程用到的函数
     */
    var viewStrokeColor = function(d) {
      if (d.name === "当前") {
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
    }

    var formatDate = function(d) {
        var date = new Date(d);
        return (date.getYear()) + 1900 + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    }

    /*
     * 数据处理函数
     */
    var collectDeadlineNodes = function(data, results, parent) {
        if (typeof(data.detail.deadline) !== "undefined") {
            var name;
            if (typeof(parent) !== "undefined" && parent.name.length < 10) name = parent.name + "-" + data.name;
            else name = data.name;
            var finishPerc = data.detail.finished / data.detail.total;
            results.push({
                "name": name,
                "deadline": toDate(data.detail.deadline),
                "fperc": finishPerc
            });
        }

        if (typeof(data.children) != "undefined") {
            data.children.map(function(child) {
                collectDeadlineNodes(child, results, data);
            })
        }
    }

    var transformData = function(data) {
        var start = data.detail.start;
        var end = data.detail.end;
        var results = [];
        collectDeadlineNodes(data, results);
        return {
            "start": toDate(start),
            "end": toDate(end),
            "nodes": results
        };
    }

    /*
     * 对外的设置函数
     */
    chart.data = function(values) {
        if (!arguments.length) return deadlineData;
        deadlineData = transformData(values);
        return chart;
    }

    chart.setStartFromNow = function(value) {
      if (typeof(value) !== "undefined") {
        startFromNow = value;
      }
      return chart;
    }

    chart.setDisplayBeforeNow = function(value) {
      if (typeof(value) != "undefined") {
        displayBeforeNow = value;
      }
      return chart;
    }

    return chart;
};

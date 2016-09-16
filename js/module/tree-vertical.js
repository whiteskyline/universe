'use strict';

d3.chart = d3.chart || {};

d3.chart.architectureTree = function() {

    var svg, tree, treeData, diameter, activeNode, width, height;

    /**
     * Build the chart
     */
    function chart(){
        if (typeof(tree) === 'undefined') {
            tree = d3.layout.tree()
                .size([width - 12, height - 12])
                // .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

            svg = d3.select("#graph").append("svg")
                .attr("width", height)
                .attr("height", width)
                .append("g")
                // .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
        }

        var nodes = tree.nodes(treeData),
            links = tree.links(nodes);

        updateChildrenFinishedStatus(nodes);
        activeNode = null;

        svg.call(updateData, nodes, links);
    }

    /**
     * Update the chart data
     * @param {Object} container
     * @param {Array}  nodes
     */
    var updateData = function(container, nodes, links) {

        // Enrich data
        addDependents(nodes);
        nodes.map(function(node) {
            addIndex(node);
        });

        var diagonal = d3.svg.diagonal()
            .projection(function(d) {
              return [d.y, d.x];
            });

        var linkSelection = svg.selectAll(".link").data(links, function(d) {
            return d.source.name + d.target.name + Math.random();
        });
        linkSelection.exit().remove();

        linkSelection.enter().append("path")
            .attr("class", function(d){
              if (typeof(d.target.detail.active) !== "undefined") {
                return "link-active link";
              } else {
                return "link";
              }
            })
            .attr("d", diagonal);

        var nodeSelection = container.selectAll(".node").data(nodes, function(d) {
            return d.name + Math.random();  // always update node
        });
        nodeSelection.exit().remove();

        var node = nodeSelection.enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
            .on('mouseover', function(d) {
                if(activeNode !== null) {
                    return;
                }
                fade(0.1)(d);
                document.querySelector('#panel').dispatchEvent(
                    new CustomEvent("hoverNode", { "detail": d.name })
                );
            })
            .on('mouseout', function(d) {
                if(activeNode !== null) {
                    return;
                }
                fade(1)(d);
            })
            .on('click', function(d) {
                select(d.name);
            });

        var colors = ["#FF0033", "#E6109B", "#FFE3FB", "#F2FE28", "#00FF80"]
        var ranges = [0.2, 0.4, 0.6, 0.8]

        node.append("circle")
            .attr("r", function(d) { return 6.0 * (d.size || 1); })
            .attr("class", function(d) {
              if (typeof(d.detail.active) !== "undefined") {
                return "active";
              } else {
                return "";
              }
            })
            .style('stroke', function(d) {
                return d3.scale.threshold()
                    .domain(ranges)
                    .range(colors)(d.detail.finished / d.detail.total);
            })
            .style("stroke-width", function(d) {return 2.0 * (d.size || 1);})
            .style('fill', function(d) {
                // return d3.scale.threshold()
                //     .domain(ranges)
                //     .range(colors)(d.detail.finished / d.detail.total);
                // active node is filled
                return "#FFFFFF";
            });

        node.append("text")
            .attr("dy", ".62em")
            .attr("text-anchor", function(d) { return "start" })
            .attr("transform", function(d) { return "translate(8)" })
            .text(function(d) {
                return d.name;
            });

        /*
         * 心跳相关逻辑
         */
        var activeNodes = container.selectAll("circle.active");
        function repeat(func) {
          activeNodes
            .transition()
            .duration(700)
            .call(func);
        }
        // 反向变化
        function transOppo(trans) {
          trans
          .each("end", function(){
            repeat(transPosi);
          })
          .style("stroke-width", function(d) {return 2.0 * (d.size || 1);})
          .attr("r", function(d) {return 6.0 * (d.size || 1);});
        }
        // 正向变化
        function transPosi(trans) {
          trans
          .each("end", function(){
            repeat(transOppo);
          })
          .style("stroke-width", function(d) {return 6.0 * (d.size || 1);})
          .attr("r", function(d) {return 18.0 * (d.size || 1);});
        }
        repeat(transPosi);
    };

    /**
     * Add the node dependents in the tree
     * @param {Array} nodes
     */
    var addDependents = function(nodes) {
        var dependents = [];
        nodes.forEach(function(node) {
            if (node.dependsOn) {
                node.dependsOn.forEach(function(dependsOn) {
                    if (!dependents[dependsOn]) {
                        dependents[dependsOn] = [];
                    }
                    dependents[dependsOn].push(node.name);
                });
            }
        });
        nodes.forEach(function(node, index) {
            if (dependents[node.name]) {
                nodes[index].dependents = dependents[node.name];
            }
        });
    };

    /**
     * Add indices to a node, including inherited ones.
     *
     * Mutates the given node (datum).
     *
     * Example added properties:
     * {
     *   index: {
     *     relatedNodes: ["Foo", "Bar", "Baz", "Buzz"],
     *     technos: ["Foo", "Bar"],
     *     host: ["OVH", "fo"]
     *   }
     * }
     */
    var addIndex = function(node) {
        node.index = {
            relatedNodes: [],
            technos: [],
            hosts: []
        };
        var dependsOn = getDetailCascade(node, 'dependsOn');
        if (dependsOn.length > 0) {
            node.index.relatedNodes = node.index.relatedNodes.concat(dependsOn);
        }
        if (node.dependents) {
            node.index.relatedNodes = node.index.relatedNodes.concat(node.dependents);
        }
        var technos = getDetailCascade(node, 'technos');
        if (technos.length > 0) {
            node.index.technos = technos;
        }
        var hosts = getHostsCascade(node);
        if (hosts.length > 0) {
            node.index.hosts = hosts;
        }
    };

    var getDetailCascade = function(node, detailName) {
        var values = [];
        if (node[detailName]) {
            node[detailName].forEach(function(value) {
                values.push(value);
            });
        }
        if (node.parent) {
            values = values.concat(getDetailCascade(node.parent, detailName));
        }
        return values;
    };

    var getHostsCascade = function(node) {
        var values = [];
        if (node.host) {
            for (var i in node.host) {
                values.push(i);
            }
        }
        if (node.parent) {
            values = values.concat(getHostsCascade(node.parent));
        }
        return values;
    };

    var fade = function(opacity) {
        return function(node) {
            //if (!node.dependsOn || !(node.parent && node.parent.dependsOn)) return;
            svg.selectAll(".node")
                .filter(function(d) {
                    if (d.name === node.name) return false;

                    /**
                     * depth更浅的节点，肯定返回true
                     * depth更深的节点，取相应节点的子下面的某个深度节点，判断是否对
                     */
                    if (node.depth >= d.depth) return true;
                    if (parentAtLevel(d, node.depth) == node) return false;

                    return node.index.relatedNodes.indexOf(d.name) === -1;
                })
                .transition()
                .style("opacity", opacity);
        };
    };

    var parentAtLevel = function(node, level) {
      var parentNode = node;
      while (parentNode.depth > level) {
        parentNode = parentNode.parent;
      }
      return parentNode;
    }

    var filters = {
      name: '',
      technos: [],
      hosts: []
    };

    var isFoundByFilter = function(d) {
        var i;
        if (!filters.name && !filters.technos.length && !filters.hosts.length) {
            // nothing selected
            return true;
        }
        if (filters.name) {
            if (d.name.toLowerCase().indexOf(filters.name) === -1) return false;
        }
        var technosCount = filters.technos.length;
        if (technosCount) {
            if (d.index.technos.length === 0) return false;
            for (i = 0; i < technosCount; i++) {
                if (d.index.technos.indexOf(filters.technos[i]) === -1) return false;
            }
        }
        var hostCount = filters.hosts.length;
        if (hostCount) {
            if (d.index.hosts.length === 0) return false;
            for (i = 0; i < hostCount; i++) {
                if (d.index.hosts.indexOf(filters.hosts[i]) === -1) return false;
            }
        }
        return true;
    };

    var refreshFilters = function() {
        d3.selectAll('.node').classed('notFound', function(d) {
            return !isFoundByFilter(d);
        });
    };

    var select = function(name) {
        if (activeNode && activeNode.name == name) {
            unselect();
            return;
        }
        unselect();
        svg.selectAll(".node")
            .filter(function(d) {
                if (d.name === name) return true;
            })
            .each(function(d) {
                document.querySelector('#panel').dispatchEvent(
                    new CustomEvent("selectNode", { "detail": d.name })
                );
                d3.select(this).attr("id", "node-active");
                activeNode = d;
                fade(0.1)(d);
            });
    };

    var unselect = function() {
        if (activeNode == null) return;
        fade(1)(activeNode);
        d3.select('#node-active').attr("id", null);
        activeNode = null;
        document.querySelector('#panel').dispatchEvent(
            new CustomEvent("unSelectNode")
        );
    };

    chart.select = select;
    chart.unselect = unselect;

    chart.data = function(value) {
        if (!arguments.length) return treeData;
        treeData = value;
        return chart;
    };

    chart.diameter = function(value) {
        if (!arguments.length) return diameter;
        diameter = value;
        return chart;
    };

    chart.size = function(x, y) {
      height = x;
      width = y;
      return chart;
    };

    chart.nameFilter = function(nameFilter) {
        filters.name = nameFilter;
        refreshFilters();
    };

    chart.technosFilter = function(technosFilter) {
        filters.technos = technosFilter;
        refreshFilters();
    };

    chart.hostsFilter = function(hostsFilter) {
        filters.hosts = hostsFilter;
        refreshFilters();
    };

    return chart;
};

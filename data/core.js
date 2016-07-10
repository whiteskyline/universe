function transformRoot(data, fields) {
  for (var key in data) {
    var targetField;
    fields.map(function(field){
      if (field.key === key) targetField = field;
    })
    return transformDataFormat(key, data[key], targetField.start, targetField.end);
  }
}

function transformDataFormat(name, data, start, end) {
  var node = {"name": name}
  var info = filterInfo(data);
  node.detail = info.detail;
  if (info.children.length >0) node.children = info.children;
  if (arguments.length > 2) {
    node.detail.start = start;
    node.detail.end = end;
  }

  return node;
}

function filterInfo(data) {
  var children = []
  var detail = {}
  for (var key in data) {
    if (!collectDetail(key, data[key], detail)) {
      children.push(transformDataFormat(key, data[key]));
    }
  }

  return {"children": children, "detail": detail};
}

function collectDetail(key, value, detail) {
  if (key.startsWith("_")) {
    if (key == "_d") {
      for (k in value) {
        collectDetail(k, value[k], detail);
      }
    }
    if (key == "_dl") {
      detail.deadline = value;
    }
    if (key == "_u") {
      detail.urls = value;
    }
    if (key == "_b") {
      detail.books = value;
    }
    if (key == "_t") {
      detail.techkeys = value;
    }
    if (key == "_c") {
      detail.comment = value;
    }
    if (key == "_f") {
      detail.finished = value;
    }
    if (key == "_ac") {
      detail.active = value;
    }
    return true;
  }
  return false;
}

app.service("storage", function(data){
  var registeredFields = [];
  var register = function(key, data, def, startDate, endDate) {
    registeredFields.push({"key": key, "data": data, "default": def, "start": startDate, "end": endDate});
  }
  var getFields = function() {
    return registeredFields;
  }
  var select = function(data) {
    data.setData(transformRoot(data, getFields()));
  }

  return {
    register: register,
    getFields: getFields,
    select: select
  };
});

var markFinishStatus = function(node){
  // 已经获得的，不再重复获得
  if (typeof(node.detail.total) !== "undefined") {
    return node.detail;
  }

  if (typeof(node.children) !== 'undefined') {
    var status = updateChildrenFinishedStatus(node.children)
    node.detail.total = status.total;
    node.detail.finished = status.finished;
    return node.detail;
  }

  node.detail.total = 1;
  if (typeof(node.detail.finished) == "undefined") {
    node.detail.finished = 0;
  }
  if (node.detail.finished === true) {
    node.detail.finished = 1;
  }

  return node.detail;

}

var updateChildrenFinishedStatus = function(nodes){
  var total = 0;
  var finished = 0;
  nodes.map(function(node) {
    var childStatus = markFinishStatus(node);
    total = total + childStatus.total;
    finished = finished + childStatus.finished;
  })
  return {'total': total, 'finished': finished}
}

app.controller("fieldPanelCtrl", function($scope, storage, data){
  'use strict'
  var fields = storage.getFields();
  $scope.fields = fields;
  $scope.$watch('selectedField', function(newValue, oldValue, scope){
    if (newValue === oldValue) {
      return;
    }
    var rootData = transformRoot(newValue.data, fields);
    markFinishStatus(rootData);
    data.setData(rootData);
  }, true);
  fields.map(function(value){
    if (typeof(value.default) !== "undefined" && value.default == true) {
      window.onload = function() {
          console.log("data initialized");
          $scope.selectedField = value;
          $scope.$digest();
      }
    }
  });
});

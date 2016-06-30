function transformRoot(data) {
  for (var key in data) {
    return transformDataFormat(key, data[key]);
  }
}

function transformDataFormat(name, data) {
  var node = {"name": name}
  var info = filterInfo(data);
  node.detail = info.detail;
  if (info.children.length >0) node.children = info.children;

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
    return true;
  }
  return false;
}

app.service("storage", function(data){
  var registeredFields = [];
  var register = function(key, data) {
    registeredFields.push({"key": key, "data": data});
  }
  var getFields = function() {
    return registeredFields;
  }
  var select = function(data) {
    data.setData(transformRoot(data));
  }

  return {
    register: register,
    getFields: getFields,
    select: select
  };
});

app.controller("fieldPanelCtrl", function($scope, storage, data){
  'use strict'
  $scope.fields = storage.getFields();
  $scope.selectedField = "";
  $scope.$watch('selectedField', function(newValue, oldValue, scope){
    if (newValue === oldValue) {
      return;
    }
    data.setData(transformRoot(newValue.data));
  }, true);
});

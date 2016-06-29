app.controller('skillTreeCtrl', function ($scope, bus, data) {
    'use strict';
    bus.on('updateData', function(data) {
        console.log("scope data will be changed", data);
        $scope.data = angular.copy(data);
    });
    // 要在这里初始化，要么会丢失事件
    // initData(data)
});

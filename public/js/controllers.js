'use strict';

function AppCtrl($scope, $http, $navigate) {
    $scope.$navigate = $navigate;

    $http({method: 'GET', url: '/api/name'}).
        success(function(data, status, headers, config) {
            $scope.name = data.name;
        }).
        error(function(data, status, headers, config) {
            $scope.name = 'Error!'
        });
}
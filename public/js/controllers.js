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

//function MyCtrl1($scope, $http, $navigate) {
//    $scope.$navigate = $navigate;
//}
//MyCtrl1.$inject = [];
//
//
//function MyCtrl2($scope, $http, $navigate) {
//    $scope.$navigate = $navigate;
//}
//MyCtrl2.$inject = [];

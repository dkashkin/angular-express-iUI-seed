'use strict';

// Declare app level module which depends on filters, and services
angular.module('Main', ['Main.filters', 'Main.services', 'Main.directives', 'mobile-navigate']).
    config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2', controller: MyCtrl2});
        $routeProvider.otherwise({redirectTo: '/view1'});
        $locationProvider.html5Mode(true);
  });
//run(function($route, $http, $templateCache) {
//    angular.forEach($route.routes, function(r) {
//        if (r.templateUrl) {
//            $http.get(r.templateUrl, {cache: $templateCache});
//        }
//    });
//});


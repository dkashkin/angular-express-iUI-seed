'use strict';

// Declare app level module which depends on filters, and services
angular.module('Main', ['Main.filters', 'Main.services', 'Main.directives', 'mobile-navigate']).
    config(function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home'});
        $routeProvider.when('/page1', {templateUrl: 'partials/page1'});
        $routeProvider.when('/popup1', {templateUrl: 'partials/popup1'});
        $routeProvider.otherwise({redirectTo: '/'});
        //$locationProvider.html5Mode(true);
  });
//run(function($route, $http, $templateCache) {
//    angular.forEach($route.routes, function(r) {
//        if (r.templateUrl) {
//            $http.get(r.templateUrl, {cache: $templateCache});
//        }
//    });
//});


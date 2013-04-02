'use strict';

angular.module('Main.filters', []).
    filter('myCustomFilter', function() {
        return function(input) {
            var out = "";
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            return out;
        }
    });
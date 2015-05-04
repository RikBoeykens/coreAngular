'use strict';

var app = angular.module("coreAngular");

var explanationsFilter = function() {
    return function(points) {
        points = parseInt(points);
        switch (points) {
            case 0:
                return "Not at all";
            case 1:
                return "Only occasionally";
            case 2:
                return "Sometimes";
            case 3:
                return "Often";
            case 4:
                return "Most of the time";
        }
    }
};

app.filter('explanation', explanationsFilter); 
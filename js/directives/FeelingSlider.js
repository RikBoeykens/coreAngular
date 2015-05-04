'use strict';

var app = angular.module("coreAngular");

var feelingSlider = function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: 'partials/directives/feelingslider.html',
        scope: {
            sliderValue: "="
        }
    };
};

app.directive('feelingslider', feelingSlider);

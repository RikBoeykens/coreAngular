'use strict';

var app = angular.module("coreAngular");

var MainController = function($scope, $location, $rootScope) {

    $scope.startQuiz = function(){
        $rootScope.resultSet =  {WellBeing:0, Problems:0, Functioning:0, Risk:0};
        $rootScope.questions = JSON.parse(questionData);
        $location.path("/question/1");
    }
};

app.controller("MainController", MainController);

'use strict';

var app = angular.module("coreAngular");

var MainController = function($scope, $location, $rootScope) {
    $rootScope.questions = JSON.parse(questionData);
    $scope.startQuiz = function(){
        $rootScope.resultSet = initResultSet($scope.username);
        $location.path("/question/1");
    }
};

var initResultSet = function(userName){
    return {Points:
            {WellBeing:0, Problems:0, 
             Functioning:0, Risk:0},
            Info:
            {Name:userName, StartTime: new Date()}};
}

app.controller("MainController", MainController);

'use strict';

var app = angular.module("coreAngular");

var QuestionController = function($scope, $location, $rootScope, $routeParams) {
    if ($rootScope.resultSet === undefined){
        $location.path("/main");    
    }
    var questionNo = parseInt($routeParams.questionNo);
    var currentQuestion = $rootScope.questions[questionNo-1];
    $scope.progress = questionNo;
    $scope.maxProgress = $rootScope.questions.length;
    
    $scope.question = currentQuestion.question_text;
        
    $scope.slider = 0;

    $scope.nextQuestion = function(){
        recordResult();
        if (questionNo<$rootScope.questions.length){
            $location.path("/question/"+(questionNo+1));
        }else{
            $location.path("/result");
        }
    }
    
    var recordResult = function(){
        var currentResult = parseInt($scope.slider);
        //if question uses 4-0 then change accordingly
        if (currentQuestion.question_asc=="false"){
            currentResult = 4 - currentResult;    
        }
        //increase correct part of resultset
        var currentDimension = currentQuestion.question_dimension;
        if (currentDimension.toUpperCase()=='W'){
            $rootScope.resultSet.WellBeing+=currentResult;
        }else if(currentDimension.toUpperCase()=='P'){
            $rootScope.resultSet.Problems+=currentResult;
        }else if(currentDimension.toUpperCase()=='F'){
            $rootScope.resultSet.Functioning+=currentResult;
        }else if(currentDimension.toUpperCase()=='R'){
            $rootScope.resultSet.Risk+=currentResult;
        }
    }
};

app.controller("QuestionController", QuestionController);
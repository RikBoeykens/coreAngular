'use strict';

var app = angular.module("coreAngular");

var ResultController = function($scope, $location, $rootScope, PdfSaver) {
    if ($rootScope.resultSet === undefined){
        $location.path("/main");    
    }
    $scope.resultTemplate = calculateScore($rootScope.resultSet);
    $scope.saveAsPdf = function(){
        PdfSaver.save($rootScope.resultSet);
    }
};

var calculateScore = function(resultSet){
    var totalResult = resultSet.Points.WellBeing + resultSet.Points.Problems + resultSet.Points.Functioning + resultSet.Points.Risk;
    var riskResult = resultSet.Points.Risk;
    
    if (riskResult>10){
        resultSet.Assessment = "Risk";
        return "partials/result/riskLevel.html";  
    }else if(totalResult>=85){
        resultSet.Assessment = "Severe";
        return "partials/result/severeLevel.html";
    }else if(totalResult>=68){
        resultSet.Assessment = "Moderate to Severe";
        return "partials/result/moderateToSevereLevel.html";  
    }else if(totalResult>=51){
        resultSet.Assessment = "Moderate";
        return "partials/result/moderateLevel.html";  
    }else if(totalResult>=34){
        resultSet.Assessment = "Mild";
        return "partials/result/mildLevel.html";  
    }else if(totalResult>=21){
        resultSet.Assessment = "Low";
        return "partials/result/lowLevel.html"; 
    }else{
        resultSet.Assessment = "Healthy";
        return "partials/result/healthyLevel.html"; 
    }
}

app.controller("ResultController", ResultController);
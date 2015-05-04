'use strict';

var app = angular.module("coreAngular");

var ResultController = function($scope, $location, $rootScope) {
    $scope.resultTemplate = calculateScore($scope, $rootScope);
    
};

var calculateScore = function($scope, $rootScope){
    var resultSet = $rootScope.resultSet;
    var totalResult = resultSet.WellBeing + resultSet.Problems + resultSet.Functioning + resultSet.Risk;
    var riskResult = resultSet.Risk;
    
    if (riskResult>10){
        return "partials/result/riskLevel.html";  
    }else if(totalResult>=85){
        return "partials/result/severeLevel.html";
    }else if(totalResult>=68){
        return "partials/result/moderateToSevereLevel.html";  
    }else if(totalResult>=51){
        return "partials/result/moderateLevel.html";  
    }else if(totalResult>=34){
        return "partials/result/mildLevel.html";  
    }else if(totalResult>=21){
        return "partials/result/lowLevel.html"; 
    }else{
        return "partials/result/healthyLevel.html"; 
    }
}

app.controller("ResultController", ResultController);
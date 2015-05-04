'use strict';

    var app = angular.module("coreAngular", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "partials/main.html",
                controller: "MainController"
            })
            .when("/question/:questionNo", {
                templateUrl: "partials/question.html",
                controller: "QuestionController"
            })
            .when("/result", {
                templateUrl: "partials/result.html",
                controller: "ResultController"
            })
            .otherwise({redirectTo:"/main"});
    });
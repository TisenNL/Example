/// <reference path="angular.js" />

var app = angular
            .module("Demo", [])
            .controller("redColourController", function ($scope, $rootScope) {
                $scope.redColour = "I am Red Colour";
                $rootScope.rootScopeColour = "I am Root Scope Colour";
            })
            .controller("greenColourController", function ($scope) {
                $scope.greenColour = "I am Green Colour";
            })
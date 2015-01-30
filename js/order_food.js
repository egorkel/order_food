/*global require, angular*/

(function () {
  "use strict";
  
  //Angular application
  var app = angular.module("order_food", ["ngRoute"]);
  
  app.config(function ($routeProvider, $locationProvider) {
    // Configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
    
    // Configuring routs
    $routeProvider
      .when("/", {
        templateUrl: "html/search_section.html",
        controller: "search_ctrl"
      })
      .when("/results", {
        templateUrl: "html/results.html",
        controller: "results_ctrl"
      })
      .otherwise({redirectTo: "/"});
  });
  
  // Search controller
  app.controller("search_ctrl", function ($scope, $location, $http, $rootScope) {
    $scope.result = {};
    
    $scope.search = function () {
      // Loading search results from file (for now)
      $rootScope.results = "empty :(";
      $http.get("json/results.json").success(function (data) {
        $rootScope.results = data;
        alert("Success!" + $rootScope.results);
        // Jumping to results page and pass search params
        $location.path("/results").search("item", $scope.result.item).search("addr", $scope.result.addr);
      });
      
    };
  });
  
  // Results controller
  app.controller("results_ctrl", function ($scope, $location, $http, $rootScope) {
//  app.controller("results_ctrl", ["$http", function ($http, $scope, $location) {
    // Search string in header
    $scope.item = $location.search().item;
    $scope.addr = $location.search().addr;
    
//    // Loading search results from file (for now)
//    $scope.results = "empty :(";
//    $http.get("json/results.json").success(function (data) {
//      $rootScope.results = data;
//      alert("Success!" + $rootScope.results);
//    }).error( function (data, status) {
//      alert("ERROR! Status: " + status + "\nData: " + data);
//    });
    
    $scope.results = $rootScope.results;
//    alert($scope.results[0].name);
    alert($scope.results[0].name);
    
    $scope.home = function () {
      // Jumping to home page
      $location.path("/");
      $location.url($location.path());
    };
//  }]);
  });
  
}());

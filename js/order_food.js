/*global require, angular*/

(function () {
  "use strict";
  
  var results = [
    {
      item: "pizza",
      addr: "Kharkov"
    }
  ];
  
  //Angular application
  var app = angular.module("order_food", ["ngRoute"]);
  
  app.config(function ($routeProvider, $locationProvider) {
    // Configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
    
    // Configuring routs
    $routeProvider
      .when("/order_food", {
        templateUrl: "order_food/html/search_section.html",
        controller: "search_ctrl"
      })
      .when("/order_food/results", {
        templateUrl: "order_food/html/results.html",
        controller: "results_ctrl"
      })
      .otherwise({redirectTo: "/order_food"});
  });
  
  // Search controller
  app.controller("search_ctrl", function ($scope, $location, $routeParams) {
    this.result = {};
    //this.results = results;
    
//    this.submit = function (dest) {
    $scope.search = function () {
      // Jumping to results page and pass search params
      $location.path("/order_food/results").search("item", this.result.item).search("addr", this.result.addr);
    };
  });
  
  // Results controller
  app.controller("results_ctrl", function ($scope, $location) {
//    this.home = function () {
    $scope.home = function () {
      // Jumping to home page
      $location.path("/order_food");
    };
  });
  
}());

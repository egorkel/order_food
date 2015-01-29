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
  var app = angular.module("order_food", []);
  
  // Search controller
  app.controller("search_ctrl", function () {
    this.result = {};
    this.results = results;
    this.visible = true;
    this.submit = function () {
      this.visible = false;
    };
  });
  
}());
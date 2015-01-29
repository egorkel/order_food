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
  
  // Body controller (to change header text)
  app.controller("body_ctrl", function () {
    this.text = "";
  });
  
  // Search controller (for search form)
  app.controller("search_ctrl", function () {
    this.result = {};
    this.results = results;
    this.visible = true;
    this.submit = function (dest) {
      // Setting header text
      dest.text = this.result.item + " " + this.result.addr;
      // Hiding search section
      this.visible = false;
    };
  });
  
}());
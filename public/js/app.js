"use strict";

(function(){
  angular
  .module("appOfHonor", [
    "ui.router"
  ])
  .config(Router);
  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("home", {
      url: "/",
      template: "<h2>This is the Home html and it is working</h2>"
    })
    .state("test",{
      url: "/test",
      template: "<h2>This is the Test html and it is working</h2>"
    });
    $urlRouterProvider.otherwise("/");
  }
})();

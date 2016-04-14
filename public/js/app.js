"use strict";

(function(){
  angular
  .module("appOfHonor", [
    "ui.router"
  ])
  .config(Router)
  .controller("monthsIndexController", monthsIndexCtrl)
  .controller("monthsShowController", monthsShowCtrl);

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("monthsIndex", {
      url: "/",
      templateUrl: "/html/months-index.html",
      controller: "monthsIndexController",
      controllerAs: "mIndexVM"
    })
    .state("monthsShow",{
      url: "/months/:name",
      templateUrl: "/html/months-show.html",
      controller: "monthsShowController",
      controllerAs: "mShowVM"
    });
    $urlRouterProvider.otherwise("/");
  }

  function monthsIndexCtrl(){
    var vm = this;
    vm.months = [
      {name: "10-12 Months Out"},
      {name: "6-9 Months Out"},
      {name: "3-5 Months Out"},
      {name: "2 Months Out"},
      {name: "1 Month Out"},
      {name: "2 Weeks Out"},
      {name: "1 Week Out"},
      {name: "Night Before"},
      {name: "Day Of"}
    ];
  }

  monthsShowCtrl.$inject = ["$stateParams"];
  function monthsShowCtrl($stateParams){
    var vm = this;
    vm.month = $stateParams;
  }
})();

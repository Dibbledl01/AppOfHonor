"use strict";

(function(){
  angular
  .module("appOfHonor", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Month", monthFactory)
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

  monthFactory.$inject = ["$resource"];
  function monthFactory($resource){
    var Month = $resource("/api/months/:name");
    return Month;
  }

  monthsIndexCtrl.$inject = ["Month"];
  function monthsIndexCtrl(Month){
    var vm = this;
    vm.months = Month.query();
    vm.create = function(){
      Month.save(vm.newMonth, function(response){
        vm.months.push(response);
      });
    }
  }

  monthsShowCtrl.$inject = ["$stateParams", "Month"];
  function monthsShowCtrl($stateParams, Month){
    var vm = this;
    vm.month = Month.get($stateParams, function(response){
    });
  }
})();

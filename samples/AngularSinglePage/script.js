//http://www.imagefap.com/pictures/5993236/Teen-3some-in-the-Park?gid=5993236&view=2
(function(){ // iife construct protects things from bleeding into the global scope
  'use strict'; // disables global variables definition from within the function
  angular.module('sampleApp', []) // names the module and lists dependencies on the []
  .controller('sampleController', sampleController) // defines the viewmodel's function controller
  .filter('hates', HatefulFilter)
  .filter('weak', WeaklingFilter); //
  sampleController.$inject = ['$scope', 'hatesFilter', '$timeout']; // injects dependencies

  function HatefulFilter(){
    return function(input, verb){
      verb = verb || "hates";
      input = input || "";
      return input.replace("likes", verb );
    };
  }

  function WeaklingFilter(){
    return function(input, value){
      input = input || 0;
      value = value || 0;
      if(input > value) return "Nice going, brah! Right on!";
      else return "Pff, weak...";
    }
  }

  function calculateNumericValueForString(string){
    var totalStringValue = 0;
    for(var i = 0; i < string.length; i++){
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue
  }

  function sampleController($scope, hatesFilter, $timeout){
    $scope.name = '';
    $scope.value = 0;
    $scope.counter = 0;
    $scope.increaseCounter = function(){
      $timeout(function(){
        $scope.counter++;
        console.log("Counter increased to: " + $scope.counter);
      }, 2000);
      // setTimeout(function(){
      //   // $scope.$apply(function(){
      //   //   $scope.counter++;
      //   //   console.log("Counter increased to: " + $scope.counter);
      //   // });
      //   // $scope.counter++;
      //   // console.log("Counter increased to: " + $scope.counter);
      //   // $scope.$digest();
      // }, 2000);
    };
    $scope.displayNumeric = function(){
      $scope.value = calculateNumericValueForString($scope.name);
    };
    $scope.upper = function(){
      $scope.name = hatesFilter($scope.name, "drinks");
    };
    $scope.$watch(function(){
      //console.log("digest loop fired");
    })
  };
})();

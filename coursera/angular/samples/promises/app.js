(function () {
'use strict';

angular.module('ShoppingListPromiseApp', [])
.controller('SomeController', SomeController);

SomeController.$inject = ['$q', '$timeout'];
function SomeController($q, $timeout){
  var ctrl = this;
  ctrl.message = "Working...";
  var name = asyncName();
  var credits = asyncCredits();

  $q.all([name, credits]).
  then(function(response){
    var name = response[0].name;
    var credits = response[1].credits;
    ctrl.message = "User " + name + " has " + credits + " credits.";
  })
  .catch(function(error){

  });

  function asyncName(){
    var result = { name: "" };
    var deferred = $q.defer();
    $timeout(function(){
      if(true) {
        result.name = "Stalts";
        deferred.resolve(result);
      } else {
        deferred.reject(error);
      }
    }, 2000);
    return deferred.promise;
  }

  function asyncCredits(){
      var result = { credits: 0 };
    var deferred = $q.defer();
    $timeout(function(){
      if(true) {
        result.credits = 550;
        deferred.resolve(result);
      } else {
        deferred.reject(error);
      }
    }, 500);
    return deferred.promise;
  }
}

})();

(function(){
  'use strict';
  angular.module('customServiceApp', [])
  .controller('parentController', parentController)
  .service('customService', customService);
  // services are lazily instanciated singletons.

  parentController.$inject = ['customService'];
  function parentController(customService){
    this.height = 0;
    this.weight = 0;
    this.bmi = 0;
    this.compute = function(){
      this.bmi = customService.compute(this.height, this.weight);
    }
  }

  function customService(){
    this.compute = function(height, mass){
      return (mass / ( height * height));
    }
  }

})();

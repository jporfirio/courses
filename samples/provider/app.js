(function(){
  'use strict';
  angular.module('customServiceApp', [])
  .controller('parentController', parentController)
  .provider('customService', customServiceProvider)
  .config(Config);
  // services are lazily instanciated singletons.

  function customServiceProvider(){
    this.defaults = {
      max: 10,
      min: 2
    };

    this.$get = function(){
      return new customService(this.defaults.max, this.defaults.min);
    };
  }

  Config.$inject = ['customServiceProvider'];
  function Config(customServiceProvider){
    // executed before any call to customService
    customServiceProvider.defaults.max = 5;
  }

  function customService(max, min){
    this.max = max;
    this.min = min;
  }

  parentController.$inject = ['customService'];
  function parentController(customService){
    this.max = customService.max;
    this.min = customService.min;
  }

})();

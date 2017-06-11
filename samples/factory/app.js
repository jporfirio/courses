(function(){
  'use strict';
  angular.module('customServiceApp', [])
  .controller('parentController', parentController)
  .service('customService', customService);
  // services are lazily instanciated singletons.

  parentController.$inject = ['customService'];
  function parentController(customService){

  }

  function customService(){

  }

  // function CustomServiceFactory(){
  //   var factory = function(){
  //     return new SomeService();
  //   };
  //   return factory;
  // }

  // function CustomServiceFactory(){
  //   var factory = {
  //     getSomeService: function(){
  //       return new SomeService();
  //     }
  //   };
  //   return factory;
  // }

})();

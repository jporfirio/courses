(function(){
  'use strict';
  angular.module('protInheritanceApp', [])
  .controller('parentController1', parentController1)
  .controller('childController1', childController1);

  function parentController1(){
    this.value = 1;
  }

  function childController1(){
    
  }
})();

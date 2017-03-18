(function(){
  'use strict';
  angular.module('directiveApp', [])
  .controller('directiveController', directiveController)
  // .directive('itemDescription', itemDescription) // name string literal has to be camel case
  .directive('listItem', listItem)
  .directive('controlledDirective', controlledDirective);

  function directiveController(){
    this.items = [
      { name: 'beer', quantity: 'lots' },
      { name: 'wine', quantity: 'not as much'}
    ];
    this.logName = function(name){
      console.log(name);
    }
  }

  function ControllerFunction(){
    var control = this;
    control.name = 'Fuckery';
    control.rename = function(){
      control.name = 'Tom Fuckery';
    };
  }

  function controlledDirective(){
    var ddo = {
      scope: {
        prop: '<'
        // = for two way binding, < for one way binding
        // angular doesn't watch for changes inside the directive with <
        // objects are passed by reference, so
        // changing the value may still cause unwanted effects
      },
      controller: ControllerFunction, // controller to use on directive
      bindToController: true, // tells angular to attach scope to the controller
      controllerAs: 'ctrl', // label on 'controller as' syntax
      templateUrl: 'template.html'
    };
    return ddo;
  }

  // function itemDescription(){
  //   var ddo = { // directive definition object
  //     scope: { // isolate scope
  //       prop: '=?attributeName' // bydireactional value
  //       // empty string uses the object key as a name
  //       // =? signifies it's an optional attribute
  //     }
  //     template: '{{item.name}} - {{item.quantity}}'
  //   }
  //   return ddo;
  // }

  function listItem(){
    // has to be used throught some kind of server
    // simply opening the files won't work!
    return {
      restrict: 'E',
      scope: {
        list: '=someList'
      },
      // A for attribute, E for element, AE for both
      templateUrl: 'listItem.html'
    }
  }

})();

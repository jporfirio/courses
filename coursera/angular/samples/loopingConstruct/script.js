(function(){
  'use strict';
  angular.module('shoppingApp', [])
  .controller('shoppingList', shoppingList);;
  shoppingList.$inject = ['$scope'];

  function shoppingList($scope){
    $scope.shoppingList1 = [
      'banana', 'apple', 'tomato', 'potato', 'beer'
    ];
    $scope.shoppingList2 = [
      {
        name: 'banana', quantity: 5
      },
      {
        name: 'apple', quantity: 3
      },
      {
        name: 'beer', quantity: 12
      },
      {
        name: 'banana split', quantity: 2
      }
    ];
    $scope.addToList = function(){
      $scope.shoppingList2.push({
         name: $scope.itemName,
         quantity: $scope.itemQuantity || 0
      });
    }
  };
})();

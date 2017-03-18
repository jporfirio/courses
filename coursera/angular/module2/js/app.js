(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('displayToBuyController', displayToBuyController)
  .controller('displayBoughtController', displayBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  displayToBuyController.$inject = ['ShoppingListCheckOffService'];
  function displayToBuyController(shoppingService){
    this.toBuyItems = shoppingService.toBuyItems;
    this.buy = function(item){
      shoppingService.makePurchase(item);
    }
  }

  displayBoughtController.$inject = ['ShoppingListCheckOffService'];
  function displayBoughtController(shoppingService){
    this.boughtItems = shoppingService.boughtItems;
  }

  function ShoppingListCheckOffService(){
    this.toBuyItems = [
      { name: 'cans of beer', quantity: 12 },
      { name: 'bottles of wine', quantity: 4 },
      { name: 'bottles of vodka', quantity: 2 },
      { name: 'bottles of absinthe', quantity: 2 },
      { name: 'bottles of grape juice', quantity: 6 }
    ];
    this.boughtItems = [];
    this.makePurchase = function(item){
      this.toBuyItems.splice(this.toBuyItems.indexOf(item), 1);
      this.boughtItems.push(item);
    }
  }

})();

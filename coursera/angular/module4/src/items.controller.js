(function() {
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    ItemsController.$inject = ['items'];
    function ItemsController(items){
        this.title = 'Items';
        this.items = items.data.menu_items;
        // console.log(items.data.menu_items);
    }
}());

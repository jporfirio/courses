(function() {
    'use strict';
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories){
        this.title = 'Categories';
        this.categories = categories.data;
        // this.categories = [];
        // this.categories.push({activity: 'running'});
        // console.log(categories);
    }
}());

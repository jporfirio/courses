(function() {
    'use strict';
    angular.module('MenuApp')
    .component('categoriesComponent', {
        templateUrl: 'templates/categories.template.html',
        bindings: {
            categories: '<'
        }
    })
}());

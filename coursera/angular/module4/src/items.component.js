(function() {
    'use strict';
    angular.module('MenuApp')
    .component('itemsComponent', {
        templateUrl: 'templates/items.template.html',
        bindings: {
            item: '<'
        }
    })
}());

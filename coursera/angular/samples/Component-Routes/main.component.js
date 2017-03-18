(function() {
    'use strict';
    angular.module('MainModule')
    .component('mainComponent', {
        templateUrl: 'home.html',
        bindings: {
            data: '<'
        }
    })
}());

(function() {
    'use strict';
    angular.module('MainModule')
    .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'MainController as ctrl',
            bindings: {
                firstname: '<',
                secondname: '<'
            }
        });
    }
}());

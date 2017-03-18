// (function() {
//     'use strict';
//     angular.module('MenuApp', ['data'])
//     .component('categories', {
//         templateUrl: 'categories.template.html',
//         bindings: {
//             categories: '<'
//         }
//     })
//     .config(RoutesConfig);
//
//     RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
//     function RoutesConfig($stateProvider, $urlRouterProvider){
//         $urlRouterProvider.otherwise('/');
//     }
// }());
// (function() {
//     'use strict';
//     angular.module('data', [])
//     .service('MenuDataService')
//     .constant('api', 'https://davids-restaurant.herokuapp.com/');
//
//     MenuDataService.$inject = ['$http', 'api'];
//     function MenuDataService($http, api){
//         function getAllCategories(){
//             return $http({
//                 method: 'GET',
//                 url: (apicat + 'categories.json')
//             });
//         }
//         function getItemsForCategory(categoryShortName){
//             return $http({
//                 method: 'GET',
//                 url: (apicat + 'menu_items.json'),
//                 params: {category: categoryShortName}
//             })
//         }
//     }
// })();

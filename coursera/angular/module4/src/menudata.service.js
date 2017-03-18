(function() {
    'use strict';
    angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('apiurl', 'https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$http', 'apiurl'];
    function MenuDataService($http, apiurl){
        // var service = this;
        this.getAllCategories = function(){
            var response = $http({
                method: 'GET',
                url: (apiurl + 'categories.json')
            });
            return response;
        }
        this.getItemsForCategory = function(categoryShortName){
            console.log(categoryShortName);
            return $http({
                method: 'GET',
                url: (apiurl + 'menu_items.json'),
                params: {category: categoryShortName}
            });
        }
    }
}());

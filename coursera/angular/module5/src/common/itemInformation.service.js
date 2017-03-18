(function() {
    'use strict';
    angular.module('public')
    .service('ItemInformationService', ItemInformationService);

    ItemInformationService.$inject = ['$http', 'ApiPath', '$q'];
    function ItemInformationService($http, ApiPath, $q){
        this.getItemInformation = function(itemShortName){
            return $http({
                method: 'GET',
                url: ApiPath + '/menu_items/' + itemShortName + '.json'
            })
            .then(function(response){
                response.data.imageLink = ApiPath + '/images/' + itemShortName + '.jpg'
                return response.data;
            })
            .catch(function(err){
                return $q.reject('Data unavailable...');
            });
        }
    }
}());

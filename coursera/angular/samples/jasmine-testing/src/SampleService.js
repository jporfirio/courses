(function() {
    'use strict';
    angular.module('SampleModule')
    .service('SampleService', SampleService)
    .constant('apiurl', 'http://davids-restaurant.herokuapp.com');

    SampleService.$inject = ['$http', '$q', 'apiurl'];
    function SampleService($http, $q, apiurl){
        this.getLength = function(){
            return $http({
                method: 'GET',
                url: (apiurl + '/categories.json')
            })
            .then(function(response){
                return response.data.length;
            })
            .catch(function(err){
                return $q.reject("Data unavailable");
            });
        }
    }
}());

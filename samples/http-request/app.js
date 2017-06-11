(function(){
  'use strict';
  angular.module('MenuCategoriesApp', [])
  .controller('MenuCategoriesController', MenuCategoriesController)
  .service('MenuCategoriesService', MenuCategoriesService)
  .constant('apiurl', 'http://davids-restaurant.herokuapp.com');

  MenuCategoriesController.$inject = ['MenuCategoriesService'];
  function MenuCategoriesController(MenuCategoriesService){
    var promise = MenuCategoriesService.getMenuCategories();
    var menu = this;

    promise.then(function(response){
      menu.categories = response;
    })
    .catch(function(error){
      console.log("Something wrong...");
    });

    menu.logMenuItems = function(shortname){
      var promise = MenuCategoriesService.getMenuForCategory(shortname);

      promise.then(function(response){
        // console.log(response.data);
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
    };
  }

  MenuCategoriesService.$inject = ['$http', 'apiurl'];
  function MenuCategoriesService($http, apiurl){
    var service = this;
    // service.getMenuCategories = function(){
    //   var response = $http({
    //     method: 'GET',
    //     url: (apiurl + '/categories.json')
    //   });
    //   return response;
    // }

    service.getMenuCategories = function(){
        return $http({
            method: 'GET',
            url: (apiurl + '/categories.json')
        })
        .then(function(response){
            return response.data;
        })
        .catch(function(err){
            return $q.reject("Data corrupted...");
        });
    }

    // service.getMenuForCategory = function(shortname){
    //   var response = $http({
    //     method: 'GET',
    //     params: { category: shortname },
    //     url: (apiurl + '/menu_items.json')
    //   });
    //   return response;
    // }
    service.getMenuForCategory = function(shortname){
        return $http({
            method: 'GET',
            params: { category: shortname },
            url: (apiurl + '/menu_items.json')
        })
        .then(function(response){
            return response.data.menu_items;
        })
        .catch(function(err){
            return $q.reject("Data corrupted...");
        });
    }
  }

})();

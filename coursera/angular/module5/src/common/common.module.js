(function() {
"use strict";

angular.module('common', [])
// .constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
// .constant('ApiPath', 'http://davids-restaurant.herokuapp.com')
.constant('ApiPath', 'https://lit-sierra-94732.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

(function() {
    'use strict';
    angular.module('public')
    .service('SignUpService', SignUpService);

    function SignUpService(){
        this.user = {};

        this.save = function(user){
            this.user = user;
        }

        this.getUser = function(){
            return this.user;
        }
    }
}());

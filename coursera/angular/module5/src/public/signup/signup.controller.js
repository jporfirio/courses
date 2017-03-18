(function() {
    'use strict';
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService', 'ItemInformationService'];
    function SignUpController(SignUpService, ItemInformationService){
        var vm = this;
        vm.invalidDish = false;
        vm.newUserSaved = false;

        vm.reset = function(){

        }

        vm.save = function(){
            ItemInformationService.getItemInformation(vm.favoriteDish)
            .then(function(response){
                SignUpService.save({
                    firstName: vm.firstName,
                    lastName: vm.lastName,
                    email: vm.email,
                    phone: vm.phone,
                    favoriteDish: vm.favoriteDish
                });
                vm.newUserSaved = true;
                vm.invalidDish = false;
            })
            .catch(function(err){
                vm.invalidDish = true;
                vm.newUserSaved = false;
            });
        }
    }
}());

(function() {
    'use strict';
    angular.module('public')
    .controller('InfoController', InfoController);

    InfoController.$inject = ['SignUpService', 'ItemInformationService'];
    function InfoController(SignUpService, ItemInformationService) {
        var vm = this;
        vm.user = SignUpService.getUser();
        vm.userExists = false;

        vm.getItemInformation = function(){
            ItemInformationService.getItemInformation(vm.user.favoriteDish)
            .then(function(itemInformation){
                console.log(itemInformation);
                vm.imageLink = itemInformation.imageLink;
                vm.description = itemInformation.description;
                vm.userExists = true;
            });
        }

        vm.getItemInformation();
    }
}());

(function() {
    'use strict';
    angular.module('MainModule')
    .controller('MainController', MainController);

    // MainController.$inject = ['items'];
    function MainController(){
        var mainlist = this;
        mainlist.firstname = 'flubber';
        mainlist.secondname = 'gastric';
    }
}());

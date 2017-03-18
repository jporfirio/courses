(function() {
    'use strict';
    angular.module('SampleModule')
    .controller('SampleController', SampleController);

    SampleController.$inject = ['SampleService'];
    function SampleController(SampleService){
        this.getLength = function(){
            var promise = SampleService.getLength();
            // console.log(promise);
            return promise
            .catch(function(err){
                console.log("Something wrong..." + err);
                throw err;
            })
        }
        this.getLength();
    }

}());

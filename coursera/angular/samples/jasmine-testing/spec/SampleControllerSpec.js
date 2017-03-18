describe("SampleController", function(){
    beforeEach(module('SampleModule'));
    var $controller, $q,
        deferred,
        sampleController;

    beforeEach(angular.mock.inject(function(_$controller_, _$q_){
        $controller = _$controller_;
        $q = _$q_;

        var SampleServiceMock = {};
        SampleServiceMock.getLength = function(){
            return new Promise(function(resolve, reject) {
                setTimeout(function(){ resolve(10) }, 0)
            });
        }

        sampleController = $controller('SampleController', {SampleService: SampleServiceMock});
    }));

    it("should be defined", function(){
        expect(sampleController).toBeDefined();
    });
    it("should return the correct length", function(done){
        sampleController.getLength()
        .then(function(len){
            expect(len).toEqual(10);
            done()
        })
        .catch(function(err){
            expect(err).toBeUndefined();
            done()
        })
    });
});

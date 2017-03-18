describe("SampleService", function(){
    beforeEach(module('SampleModule'));
    var $service,
        sampleService,
        $httpBackend,
        apiurl;

    beforeEach(angular.mock.inject(function($injector){
        sampleService = $injector.get('SampleService');
        $httpBackend = $injector.get('$httpBackend');
        apiurl = $injector.get('apiurl');
    }));

    it("should be defined", function(){
        expect(sampleService).toBeDefined();
    });
    it("should get number of categories from apiurl", function(done){
        $httpBackend.whenGET(apiurl + '/categories.json')
        .respond(['one', 'two', 'three']);
        sampleService.getLength().then(function(response){
            expect(response).toEqual(3);
            done();
        }).catch(function(err){
            expect(err).toBeUndefined();
        });
        $httpBackend.flush();
    });
});

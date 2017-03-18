describe("sample component", function(){
    var $cc;

    beforeEach(module('SampleComponent'));
    beforeEach(inject(function(_$componentController_){
        $cc = _$componentController_;
    }));

    it("should detect no cookies in list", function(){
        var bindings = { items: [{ name: 'item 1', quantity: '1' }]};
        var ctrl = $cc('shoppingList', { $element: null }, bindings);

        expect(ctrl.cookiesInList()).toEqual(false);
    });

    it("should detect coockies in list", function(){
        var bindings = { items: [{ name: '3 cookies', quantity: '3' }]};
        var ctrl = $cc('shoppingList', { $element: null }, bindings);

        expect(ctrl.cookiesInList()).toEqual(true);
    });
});

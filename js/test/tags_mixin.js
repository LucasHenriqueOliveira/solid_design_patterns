describe("TagsMixin", function() {
    var Class;

    beforeEach(function() {
       Class = function() {};
        Class.mixin.apply(Class, [ Tags ]);
    });

    it("has tags", function() {
       expect(new Class().listTags()).toEqual([]);
    });
});
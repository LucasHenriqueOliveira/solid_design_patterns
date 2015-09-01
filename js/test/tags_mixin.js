describe("TagsMixin", function() {
    var Class;

    beforeEach(function() {
        Class = function() {};
        Class.mixin.apply(Class, [ Tags ]);
    });

    it("has tags", function() {
        expect(new Class().listTags()).toEqual([]);
    });

    it("adds a tag", function() {
        var object = new Class();
        object.addTag("lucashenrique");

        expect(object.listTags()).toEqual([ "lucashenrique" ]);
    });

    it("removes a tag", function() {
        var object = new Class();
        object.addTag("lucashenrique");
        object.removeTag("lucashenrique")

        expect(object.listTags()).toEqual([]);
    });
});
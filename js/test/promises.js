describe("Promise", function() {
   it("is resolved", function(done) {
       var output = "";
       getJSON("/solid_design_patterns/examples/promised.json").then(function(data) {
           output += "JSON got back";
           expect(output).toBe("JSON got back!");
           done();
       }).catch(function(error) {
           // handle errors
           expect(error).toBe("JSON got back!", "** Promise Failed. **");
           done();
       });
   });
});
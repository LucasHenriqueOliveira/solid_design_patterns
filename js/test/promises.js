describe("Promise", function() {
   it("is resolved", function() {
       var output = "";
       getJSON("examples/promises.json").then(function(data) {
         output += "JSON got back";
       }).then(function() {
           expect(output).toBe("JSON got back!");
       });
   });
});
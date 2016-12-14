var data = require("../data.js");

describe("data spec at first time",function(){
    it("listWorker contain one default element",function(done){
        expect(data.listWorker.length).toEqual(1);
        done();
    });
});
describe("insert a person",function(){
    beforeEach(function(){
        data.insModEmployee(1,"a","a",2,2000);
    });
    it("and the list grow up",function(done){
        expect(data.showEmployee(1)).not.toBeUndefined();
        expect(data.showEmployee(1)).not.toBeNull();
        done();
    });
});
describe("modify a person",function(){
    beforeEach(function(){
        data.insModEmployee(0,"y","k",12,1250);
    });
    it("the name change",function(done){
        expect(data.listWorker[0].Name).toContain("y");
        done();
    });
});
describe("delete a person",function(){
    beforeEach(function(){
        data.insModEmployee(1,"y","k",12,1250);
        data.insModEmployee(2,"y","k",12,1250);
        data.deleteEmployee(1);
    });
    it("the name change",function(done){
        expect(data.listWorker[1].Name).not.toContain("y");
        expect(data.listWorker[1].Surname).toMatch("");
        done();
    });
    it("the length of the list don't change",function(done){
        expect(data.listWorker.length).toEqual(3);
        done();
    });
});
var request = require("request");

var base_url = "http://localhost:5000/"

describe("Home page test",function(){
    it("return code 200",function(done){
        request.get(base_url, function(error, response, body){
        expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe("search page test",function(){
    it("return code 200",function(done){
        request.get(base_url, function(error, response, body){
        expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe("remove page test",function(){
    it("return code 200",function(done){
        request.get(base_url, function(error, response, body){
        expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe("Home page test",function(){
    it("return code 200",function(done){
        request.get(base_url, function(error, response, body){
        expect(response.statusCode).toBe(200);
            done();
        });
    });
});
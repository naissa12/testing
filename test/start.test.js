var expect = require("chai").expect;
var assert = require("assert");
var getP = require("../lib/getP");
var fs = require("fs");
var configFile = process.cwd() + "/config.json";

function writeConfig(config, callback) {
    fs.writeFile(configFile, JSON.stringify(config), callback);
}

describe("getPalette", function () {
    var config = {};
    
    before (function (done) {
        fs.readFile(configFile, function (err, contents) { 
           config = JSON.parse(contents.toString());
           done();
        });
    });
    
    it ("should throw an error if the result is not an array", function (done) {
        writeConfig({palette: "string"}, function (err) {
            assert.equal(getP(), 4);
            done();
        });
    });
    
    it ("should throw an error if the result is not an array", function (done) {
         writeConfig({palette: "string"}, function (err) {
             assert.throws(getP, "is not an array");
             done();
         });
     });
     
    afterEach ( function (done) {
        writeConfig(config, done);
    });
});
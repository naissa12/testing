var expect    = require("chai").expect;
var request = require("request");
var p = require('../lib/p')()

describe('Suite one', function(){
  it("equals", function () {
      var p = [1,2,3];
      expect(1).to.equal(1);
  });
});
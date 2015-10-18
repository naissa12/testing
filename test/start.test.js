var expect = require("chai").expect;
var p = require('../lib/getP')
var sinon = require('sinon')

describe('Suite one', function(done){
  it("equals", function () {
    expect(p.toggle()).to.be.true;
  });

  it ("should call substring once", function (done) {
    sinon.spy(p, "isOn");
    p.toggle();
    expect(p.isOn.calledOnce).to.be.true;
    p.isOn.restore();
    done();
  });

  it ("should return the result of parse", function (done) {
    sinon.stub(p, "isOn").returns(true);
    var result = p.toggle();

    expect(result).to.be.true;

    p.isOn.restore();

    done();
  });

  it ("should pass 1 to isOn", function (done) {
     var mock = sinon.mock(p);
     mock.expects("isOn").twice();
     p.toggle();
     p.toggle();
     mock.verify();
     done();
  });

});

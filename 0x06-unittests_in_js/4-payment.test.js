const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Create a stub for Utils.calculateNumber that always returns 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore both stub and spy to their original state
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should properly stub calculateNumber and verify console output', () => {
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with correct arguments (type = SUM, a = 100, b = 20)
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;

    // Verify console.log was called with the expected message
    expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;
  });
});

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

  it('should stub calculateNumber and verify its behavior', () => {
    // Call the function and store the result
    const result = sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with correct arguments
    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;

    // Verify console.log was called with the expected message
    expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;

    // Verify the function returns the stubbed value
    expect(result).to.equal(10);
  });
});

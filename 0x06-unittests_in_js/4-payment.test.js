const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should use calculateNumber with correct arguments and log the result', () => {
    const result = sendPaymentRequestToApi(100, 20);

    // Verify calculateNumber was called with correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify console.log was called with correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Verify the returned result
    expect(result).to.equal(10);
  });
});

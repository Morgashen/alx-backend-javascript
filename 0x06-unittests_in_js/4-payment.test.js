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
    // Restore the stub and spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should stub calculateNumber and verify its call arguments', () => {
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with correct arguments
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    // Verify console.log was called with correct message
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
  });
});

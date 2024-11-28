const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create spy before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore spy after each test
    consoleLogSpy.restore();
  });

  it('should log correct total for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    // Verify log message and call count
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
  });

  it('should log correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    
    // Verify log message and call count
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
  });
});

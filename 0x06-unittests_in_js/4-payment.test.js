const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify console.log', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');
    
    // Call the function
    const result = sendPaymentRequestToApi(100, 20);
    
    // Verify stub was called with correct arguments
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    
    // Verify console.log was called with correct message
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
    
    // Verify the return value
    expect(result).to.equal(10);
    
    // Restore stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

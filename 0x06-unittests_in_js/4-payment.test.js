// 4-payment.test.js

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM', () => {
    // Create a spy for console.log to verify its output
    const consoleLogSpy = sinon.spy(console, 'log');

    // Create a stub for Utils.calculateNumber to return a known value for SUM
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(150);

    // Call the function to be tested
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    assert(calculateNumberStub.calledWithExactly('SUM', 100, 20));

    // Assert that the console.log spy was called with the correct message
    assert(consoleLogSpy.calledWithExactly('The total is: 150'));

    // Restore the stub and spy to their original states
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

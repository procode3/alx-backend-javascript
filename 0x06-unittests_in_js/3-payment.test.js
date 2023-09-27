const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM', () => {
    // Create a spy for the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function to be tested
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the correct arguments
    assert(calculateNumberSpy.calledWithExactly('SUM', 100, 20));

    // Restore the spy to its original state to prevent side effects in other tests
    calculateNumberSpy.restore();
  });
});
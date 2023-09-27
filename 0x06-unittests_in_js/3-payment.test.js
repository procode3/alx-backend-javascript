const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
   
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    calculateNumberSpy.restore();
  });
});

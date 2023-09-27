const assert = require("assert");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment"); // Import the function you want to test

describe("5-payment.js Tests", () => {
  let consoleLogSpy;

  // Set up a spy before each test
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, "log");
  });

  // Clean up the spy after each test
  afterEach(() => {
    consoleLogSpy.restore();
  });

  it("should log 'The total is: 120' and be called once for sendPaymentRequestToApi(100, 20)", () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    assert(consoleLogSpy.calledWithExactly("The total is: 120"));

    // Verify that console.log was called only once
    assert.equal(consoleLogSpy.callCount, 1);
  });

  it("should log 'The total is: 20' and be called once for sendPaymentRequestToApi(10, 10)", () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called with the correct message
    assert(consoleLogSpy.calledWithExactly("The total is: 20"));

    // Verify that console.log was called only once
    assert.equal(consoleLogSpy.callCount, 1);
  });
});

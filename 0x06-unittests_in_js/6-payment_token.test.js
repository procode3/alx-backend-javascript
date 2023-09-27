const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct response when success is true', (done) => {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assert that the response is as expected
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        // Call done to signal the test is complete
        done();
      })
      .catch((error) => {
        // If there's an error, fail the test and provide the error message
        done(error);
      });
  });
});

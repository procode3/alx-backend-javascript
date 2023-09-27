const { expect } = require('chai');
const request = require('request');

const app = require('./api'); // Import the Express app

describe('Cart Page', () => {
  it('returns correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('returns 404 status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/hello');
      done();
    });
  });
});

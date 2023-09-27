const { expect } = require('chai');
const request = require('request');

const app = require('./api');

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

describe('Login Page', () => {
  it('returns the welcome message with the correct username', (done) => {
    const username = 'Betty';
    const postData = JSON.stringify({ userName: username });
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: postData
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Welcome ${username}`);
      done();
    });
  });
});

describe('Available Payments', () => {
  it('returns an object with payment_methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };

      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });
});

function getPaymentTokenFromAPI(success) {
    if (success) {
      return Promise.resolve({ data: 'Successful response from the API' });
    } else {
      return Promise.resolve(); // Return an empty resolved promise for failure case
    }
  }
  
  module.exports = getPaymentTokenFromAPI;
const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  describe('GET /', () => {
    it('should return correct status code', (done) => {
      request.get(`${API_URL}/`, (_error, response, _body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct response body', (done) => {
      request.get(`${API_URL}/`, (_error, _response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });

    it('should return correct content type', (done) => {
      request.get(`${API_URL}/`, (_error, response, _body) => {
        expect(response.headers['content-type']).to.include('text/html');
        done();
      });
    });
  });
});

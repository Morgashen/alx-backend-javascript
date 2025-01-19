const request = require('supertest');
const { expect } = require('chai');
const { app, server } = require('./api');

describe('Payment System API', () => {
  after(() => {
    server.close();
  });

  describe('GET /', () => {
    it('should return status code 200', async () => {
      const response = await request(app).get('/');
      expect(response.status).to.equal(200);
    });

    it('should return "Welcome to the payment system"', async () => {
      const response = await request(app).get('/');
      expect(response.text).to.equal('Welcome to the payment system');
    });

    it('should have correct Content-Type', async () => {
      const response = await request(app).get('/');
      expect(response.headers['content-type']).to.include('text/html');
    });
  });
});

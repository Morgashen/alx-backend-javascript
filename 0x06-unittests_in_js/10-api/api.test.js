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

  describe('GET /cart/:id', () => {
    it('should return 200 and correct message when id is a number', async () => {
      const response = await request(app).get('/cart/123');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Payment methods for cart 123');
    });

    it('should return 404 when id is not a number', async () => {
      const response = await request(app).get('/cart/abc');
      expect(response.status).to.equal(404);
    });

    it('should return 404 when id contains both numbers and letters', async () => {
      const response = await request(app).get('/cart/12abc');
      expect(response.status).to.equal(404);
    });
  });

  describe('GET /available_payments', () => {
    it('should return correct payment methods object', async () => {
      const response = await request(app).get('/available_payments');
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
    });

    it('should have correct Content-Type', async () => {
      const response = await request(app).get('/available_payments');
      expect(response.headers['content-type']).to.include('application/json');
    });
  });

  describe('POST /login', () => {
    it('should welcome the user', async () => {
      const response = await request(app)
        .post('/login')
        .send({ userName: 'Betty' });
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Welcome Betty');
    });

    it('should have correct Content-Type', async () => {
      const response = await request(app)
        .post('/login')
        .send({ userName: 'Betty' });
      expect(response.headers['content-type']).to.include('text/html');
    });

    it('should handle missing userName', async () => {
      const response = await request(app)
        .post('/login')
        .send({});
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Welcome undefined');
    });
  });
});

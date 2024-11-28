const { expect } = require('chai');
const request = require('supertest');
const { app, server } = require('./api');

describe('Cart page', () => {
  after(() => {
    server.close();
  });

  it('should return 200 for numeric cart ID', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Payment methods for cart 12');
  });

  it('should return 404 for non-numeric cart ID', async () => {
    const response = await request(app).get('/cart/abc');
    expect(response.status).to.equal(404);
  });
});

describe('Index page', () => {
  after(() => {
    server.close();
  });

  it('should return correct status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
  });

  it('should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Welcome to the payment system');
  });
});

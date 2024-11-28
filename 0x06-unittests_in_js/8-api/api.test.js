const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('Index page', () => {
  it('should return correct status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
  });

  it('should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Welcome to the payment system');
  });
});

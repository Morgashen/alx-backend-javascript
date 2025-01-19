const request = require('supertest');
const { expect } = require('chai');
const { app, server } = require('./api');

describe('Index page', () => {
  it('GET / returns correct response', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done(err);
      });
  });
});

describe('Cart page', () => {
  it('GET /cart/:id returns correct response when id is a number', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 12');
        done(err);
      });
  });

  it('GET /cart/:id returns 404 when id is not a number', (done) => {
    request(app)
      .get('/cart/abc')
      .expect(404)
      .end((err, _res) => {
        done(err);
      });
  });
});

describe('Available payments', () => {
  it('GET /available_payments returns correct response', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done(err);
      });
  });
});

describe('Login', () => {
  it('POST /login returns correct response', (done) => {
    request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome Betty');
        done(err);
      });
  });
});

after(() => {
  server.close();
});

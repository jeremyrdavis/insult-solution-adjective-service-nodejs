const test = require('tape');
const supertest = require('supertest');

const app = require('../app');

test('test adjective', t => {
  supertest(app)
    .get('/api/adjective')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      t.not(response.body.content, null);
      t.end();
    });
});

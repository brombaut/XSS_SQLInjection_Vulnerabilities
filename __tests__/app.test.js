const app = require('../app');
const request = require('supertest');

// `describe` is used for test components
describe('GET /', () => {

  // `it` is for individual tests
  it('responds with 200', async () => {
    await request(app).get('/').expect(200);
    // If the status code is not 200, this test will fail
  });
})
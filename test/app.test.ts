import app from '../src/app';
import supertest from 'supertest';

describe('test the root path', () => {
  test('it should response status 200 to the GET method', done => {
    supertest(app)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

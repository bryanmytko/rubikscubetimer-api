import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../lib/app';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /scrambles', () => {
  let response;

  before(() => {
    return chai
      .request(app)
      .get('/api/v1/scrambles')
      .then((res) => {
        response = res;
      });
  });

  it('should return a 200', () => {
    expect(response.status).to.eq(200);
  });
});

import {
  app, messages, chai, expect,
} from './testHelpers/config';

describe('Index js', () => {
  it('should return 404 if route not found', (done) => {
    chai
      .request(app)
      .get('/notFound')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.be.an('object');
        expect(res.body.data.message).to.be.equal(messages.notFound);
        done();
      });
  });

  it('should display a welcome message', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.be.an('object');
        expect(res.body.data.message).to.be.equal(messages.welcome);
        done();
      });
  });
});

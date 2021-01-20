/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.should();
chai.use(chaiHttp);
const socialSignUpTest = () => {
  describe('USER SOCIAL REGISTRATION WITH GOOGLE AND FACEBOOK', () => {
    it('It should get Google signup form', (done) => {
      chai.request(server)
        .get('/users/signup/google')
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
    it('It should return all user information', (done) => {
      chai.request(server)
        .get('/users/auth/google/redirect')
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
};
export default socialSignUpTest;

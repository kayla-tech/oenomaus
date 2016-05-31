
import { PublicAPI, UserAPI } from '../src/.';

const { AIRBNB_USERNAME, AIRBNB_PASSWORD } = process.env;

describe('User Endpoints', function() {

  this.timeout(10000);
  let userApi;
  before((done) => {
    const publicApi = new PublicAPI();
    publicApi.loginByEmail(AIRBNB_USERNAME, AIRBNB_PASSWORD)
    .then(({ access_token }) => {
      userApi = new UserAPI(access_token);
      done();
    });
  });

  describe('Messages Endpoints', () => {

    describe('Create Message Thread', () => {
      it('should create a message thread and a stay request, given a valid access token and a listing ID');
    });

    describe('Get Messages', () => {
      it('should return message threads', () => {
        return expect(userApi.messageThreads())
                .to.eventually.have.property('threads');
      });
    });

  });

  describe('Info Endpoints', () => {

    describe('Get User Info', () => {
      it('should return basic info about the logged-in user, such as name, picture, phone number, verifications, etc', () => {
        return expect(userApi.userInfo())
                .to.eventually.have.property('user')
      });
    });

  });
});

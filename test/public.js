
import { PublicAPI } from '../src/.';

const { AIRBNB_USERNAME, AIRBNB_PASSWORD } = process.env;

describe('Public Endpoints', function() {

  this.timeout(10000);
  const publicApi = new PublicAPI();

  describe('Login Endpoints', () => {

    describe('Login By Google', () => {
      it('should return an access_token, given a valid Google user OAuth access token');
    });

    describe('Login By Facebook', () => {
      it('should return an access_token, given a valid Facebook user OAuth access token');
    });

    describe.skip('Login By Email', () => {
      it('should return an access_token, given a valid user account email and password', () => {
        return expect(publicApi.loginByEmail(AIRBNB_USERNAME, AIRBNB_PASSWORD))
                .to.eventually.have.property('access_token');
      });
      it('should throw an error, given an invalid account details', () => {
        return publicApi.loginByEmail('dummy@email.com', 'Password').should.be.rejected;
      });
    });


  });
  describe('Get Info Endpoints', () => {

    describe('Listing Search', () => {
      it('should return listings that fit the given search parameters', () => {
        return expect(publicApi.listingSearch())
                .to.eventually.have.property('search_results');
      });
    });

    describe('Get Reviews', () => {
      it('should return reviews for a given listing', () => {
        return expect(publicApi.getReviews('2056659'))
                .to.eventually.have.property('reviews');
      });
    });

    describe('View User Info', () => {
      it('should return detailed information about a user, given his/her/its ID', () => {
        return expect(publicApi.userInfo('2917444'))
                .to.eventually.have.property('user');
      });
    });

    describe('Get Host Listings', () => {
      it('should return information about all the listings a user hosts', () => {
        return expect(publicApi.hostListings('13586993'))
                .to.eventually.have.property('listings');
      });
    });

    describe('View Listing Info', () => {
      it('should return detailed information about a listing, given its ID', () => {
        return expect(publicApi.listingInfo('9764256'))
                .to.eventually.have.property('listing');
      });
    });
  });
});

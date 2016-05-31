
import { PublicAPI, HostAPI } from '../src/.';

const { AIRBNB_USERNAME, AIRBNB_PASSWORD } = process.env;

describe('Host Endpoints', function() {

  this.timeout(10000);
  let hostApi;
  before((done) => {
    const publicApi = new PublicAPI();
    publicApi.loginByEmail(AIRBNB_USERNAME, AIRBNB_PASSWORD)
    .then(({ access_token }) => {
      hostApi = new HostAPI(access_token);
      done();
    });
  });

  describe('Messages Endpoints', () => {

    describe('Get Host Messages', () => {
      it('should return ');
    });

    describe('Pre-approve/Decline', () => {
      it('should return ');
    });

    describe('Reservation Request', () => {
      it('should return ');
    });

    describe('Get Reservation Requests', () => {
      it('should return ');
    });

    describe('Respond To Message', () => {
      it('should return ');
    });

  });

  describe('Listing Endpoints', () => {

    describe('Create Listing', () => {
      it('should create listing to host', () => {
        return expect(hostApi.createListing({
          city: 'Darlinghurst',
          state: 'New South Wales',
          name: 'Test Listing',
          country_code: 'AU',
        }, { _format: null }))
        .to.eventually.have.property('listing');
      });
    });

    describe.only('Update listing', () => {
      it('should update the listing', () => {
        return expect(hostApi.updateListing(13267647, {
          name: 'Test Name change',
          property_type_id: 2,
        }, { _format: null }))
        .to.eventually.have.property('listing');
      });
    });

    describe('Set "Neighborhood Overview"', () => {
      it('should return ');
    });

    describe('Set Address', () => {
      it('should return ');
    });

    describe('Set Long-Term Prices', () => {
      it('should return ');
    });

    describe('Set Currency', () => {
      it('should return ');
    });

    describe('Set "About The Space"', () => {
      it('should return ');
    });

    describe('Set "Guest Access"', () => {
      it('should return ');
    });

    describe('Set "Interaction with Guests"', () => {
      it('should return ');
    });

    describe('Set Summary', () => {
      it('should return ');
    });

    describe('Set "Getting Around"', () => {
      it('should return ');
    });

    describe('Set Title', () => {
      it('should return ');
    });

    describe('Set "The Room and Beds"', () => {
      it('should return ');
    });

    describe('Set Price', () => {
      it('should return ');
    });

    describe('Set "House Rules"', () => {
      it('should return ');
    });

    describe('Set Amenities', () => {
      it('should return ');
    });

    describe('Add Photo', () => {
      it('should return ');
    });

    describe('Turn On Instant Booking', () => {
      it('should return ');
    });

    describe('Turn Off Instant Booking', () => {
      it('should return ');
    });

    describe('Turn On Positive Review Instant Booking', () => {
      it('should return ');
    });

    describe('Set Instant Booking Advance Notice Field', () => {
      it('should return ');
    });

    describe('Set Instant Booking Automated Message', () => {
      it('should return ');
    });

    describe('Get Calendar Info', () => {
      it('should return ');
    });

    describe('Block Calendar Day', () => {
      it('should make a user\'s hosted listing unbookable for a given calendar day');
    });

    describe('Set Special Daily Pricing', () => {
      it('should set special pricing for a specific day');
    });

    describe('Activate/Deactive Listing', () => {
      it('should active or deactivate the user\'s listing');
    });

    describe('Delete Listing', () => {
      it('should delete a listing on the user\'s host account');
    });
  });

  describe('Verification Endpoints', () => {

    describe('Get Phone Number(s)', () => {
      it('should return the phone numbers that airbnb has to display to user so he/she can choose one to complete the security check and verify his/her account');
    });

    describe('Submit Verification Code', () => {
      it('should submit the security verification code to verify the account');
    });

    describe('Request Verification Text', () => {
      it('should text the security code to selected phone number for account verification');
    });

    describe('Request Verification Call', () => {
      it('should call the selected phone number to give the user the verification code for account verification');
    });

  });

  describe('Payment Endpoints', () => {

    describe('Set ACH Info for Payout', () => {
      it('should set the account\'s payout information so Airbnb can pay the user');
    });

  });
});

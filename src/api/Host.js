/* @flow */

import Base from './Base';

type ListingOptions = {
  locale?: string,
  currency?: string,
  _format?: 'for_lys_web', // will return listing data if specified (default)
}

type Listing = {
  state: string,
  city: string,
  country_code: string,
  apt?: string,
  street?: string,
  room_type_category?: string,
  property_type_id?: number,
  person_capacity?: number,
  bedrooms?: number,
  bathrooms?: number,
  beds?: number,
}

export default class HostAPI extends Base {
  constructor(accessToken: string) {
    if (!accessToken) {
      throw new Error('You must supply an accessToken to use this API. See the PublicAPI to get a token.')
    }
    super(accessToken);
  }

  async createListing(listing: Listing, options: ?ListingOptions): Promise<{metadata: Object, listing: Object}> {
    return this.fetch('/v2/listings', {
      urlParams: {
        _format: 'for_lys_web',
        ...options,
      },
      bodyParams: {
        skip_create_requirements: true,
        ...listing,
      },
      json: true,
    });
  }

  async updateListing(listingId: string|number, listing: Listing, options: ?ListingOptions) {
    return this.fetch(`/v2/listings/${listingId}`, {
      method: 'PUT',
      urlParams: {
        _format: 'for_lys_web',
        ...options,
      },
      bodyParams: {
        ...listing,
      },
      json: true,
    });
  }
}

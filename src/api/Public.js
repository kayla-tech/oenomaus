/* @flow */

import Base from './Base';

type BasicOptions = {
  locale?: string,
  currency?: string,
}

type SearchOptions = {
  locale?: string,
  currency?: string,
  _limit?: number,
  _offset?: number,
  _format?: 'for_search_results'|'for_search_results_with_minimal_pricing',
  guests?: number,
  ib?: boolean, // instant book
  ib_add_photo_flow?: boolean,
  location?: string,
  min_bathrooms?: number,
  min_bedrooms?: number,
  min_beds?: number,
  price_min?: number,
  price_max?: number,
  min_num_pic_urls?: number,
  sort?: 0|1,
  suppress_facets?: boolean,
  user_lat?: number,
  user_lng?: number,
};

type ReviewOptions = {
  locale?: string,
  currency?: string,
  _limit?: number,
  _offset?: number,
  _format?: 'for_mobile_client'|'for_search_results'|'for_search_results_with_minimal_pricing',
}

type ListingOptions = {
  locale?: string,
  currency?: string,
  _limit?: number,
  _offset?: number,
  _format?: 'v1_legacy_long',
  has_availability?: boolean,
}

type ListingInfoOptions = {
  locale?: string,
  _source?: 'mobile_p3',
  number_of_guests?: number,
}

export default class PublicAPI extends Base {

  async loginByEmail(username: string, password: string): Promise<Object> {
    return this.fetch('/v1/authorize', {
      bodyParams: {
        'grant_type': 'password',
        username,
        password,
      }
    })
  }

  async loginByGoogle() {
    throw new Error('Not implemented yet');
  }

  async loginByFacebook() {
    throw new Error('Not implemented yet');
  }

  async listingSearch(options: ?SearchOptions): Promise<Object> {
    return this.fetch('/v2/search_results', {
      method: 'GET',
      urlParams: {
        ...options,
      },
    });
  }

  async getReviews(listingId: string|number, options: ?ReviewOptions): Promise<Object> {
    return this.fetch('/v2/reviews', {
      method: 'GET',
      urlParams: {
        listing_id: listingId,
        role: 'all',
        ...options,
      },
    });
  }

  async userInfo(userId: string|number, options: ?BasicOptions): Promise<Object> {
    return this.fetch(`/v2/users/${userId}`, {
      method: 'GET',
      urlParams: {
        _format: 'v1_legacy_show',
        ...options,
      },
    });
  }

  async hostListings(userId: string|number, options: ?ListingOptions): Promise<Object> {
    return this.fetch('/v2/listings', {
      method: 'GET',
      urlParams: {
        user_id: userId,
        ...options,
      },
    });
  }

  async listingInfo(listingId: string|number, options: ?ListingInfoOptions): Promise<Object> {
    return this.fetch(`/v2/listings${listingId}`, {
      method: 'GET',
      urlParams: {
        _format: 'v1_legacy_for_p3',
        ...options,
      },
    });
  }


}

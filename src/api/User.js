/* @flow */

import Base from './Base';

type UserOptions = {
  locale?: string,
  currency?: string,
  offset?: number,
  items_per_page?: number,
  role?: 'guest'|'host',
}

export default class UserAPI extends Base {
  constructor(accessToken: string) {
    if (!accessToken) {
      throw new Error('You must supply an accessToken to use this API. See the PublicAPI to get a token.')
    }
    super(accessToken);
  }

  async userInfo(options: ?UserOptions) {
    return this.fetch('/v1/account/active', {
      method: 'GET',
      urlParams: {
        ...options,
      },
    });
  }

  async createMessageThread(listingId: string, guests: number = 1, checkin: Date, checkout: Date, message: string = '') {
    throw new Error('Not implemented yet');
  }

  async messageThreads(options: ?UserOptions) {
    return this.fetch('/v1/threads', {
      method: 'GET',
      urlParams: {
        ...options,
      },
    });
  }
}

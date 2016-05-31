/* @flow */

export default class APIError extends Error {

  error: string;

  constructor(error: string = 'unknown_error', message: string) {
    super();
    this.name = 'APIError';
    this.error = error;
    this.message = message;
  }
}

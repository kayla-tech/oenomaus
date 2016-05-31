/* @flow */

import FormData from 'form-data';
import fetch from 'isomorphic-fetch';

import * as config from '../config';
import APIError from '../APIError';

type FetchOptions = {
  method?: string,
  headerParams?: Object,
  urlParams?: Object,
  bodyParams?: Object,
  json?: boolean,
};

export default class Base {

  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async fetch(path: string, { method = 'POST', headerParams, urlParams, bodyParams, json = false }: FetchOptions = {}): Promise<Object> {
    const headers = Object.assign({}, config.HEADERS,
      this.accessToken ? { 'X-Airbnb-OAuth-Token': this.accessToken } : {},
      json ? { 'Content-Type': 'application/json; charset=UTF-8' } : {},
      headerParams);
    const query = this._serializeUrlParams(Object.assign({}, { 'client_id': config.CLIENT_ID }, urlParams));
    const body = bodyParams && (json ? JSON.stringify(bodyParams) : (() => {
      const form = new FormData();
      if (bodyParams) {
        Object.keys(bodyParams).forEach(k => {
          if (bodyParams && bodyParams.hasOwnProperty(k)) {
            form.append(k, bodyParams[k]);
          }
        });
      }
      return form;
    })());
    const res = await fetch(config.ENDPOINT + path + '?' + query, {
      method,
      headers,
      body,
    });

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
    if (data.error || data.error_type) {
      throw new APIError(data.error || data.error_type, data.error_message);
    }
    return data;
  }

  _serializeUrlParams(obj: Object = {}) {
    const params = [];
    const brackets = encodeURIComponent('[]');
    Object.keys(obj).forEach(k => {
      const v = obj[k];
      if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
        params.push(k + '=' + encodeURIComponent(v));
      } else if (typeof v === 'object' && Array.isArray(v)) {
        params.push(v.map(param => {
          return k + brackets + '=' + encodeURIComponent(param)
        }).join('&'))
      }
    });
    return params.join('&');
  }
}

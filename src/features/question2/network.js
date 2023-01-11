/**
 *   _|_
 *  /@-@\ Copyright © OpsBeacon, Inc.
 *  \ - /    All rights reserved.
 *   };{
 */
import axios from 'axios';
import { urls } from 'constants/index';

const sendFetchcountriesRequest = async () => {
  const url = `${urls.URL_COUNTRIES}`
  try {
    const result = await axios.get(url, {
      withCredentials: true,
      data: {},
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });

    const { data } = result;

    if (!data) {
      return {
        success: false,
        payload: { countries: [] }
      };
    }

    return {
      success: true,
      payload: {
        countries: data
      }
    };
  } catch (ex) {
    if (ex && ex.response && ex.response.status === 400) {
      return {
        success: false,
        reason: 'sessionTimeout'
      };
    }

    return { success: false, payload: { countries: [] } };
  }
};

export { sendFetchcountriesRequest };

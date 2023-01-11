/**
 *   _|_
 *  /@-@\ Copyright © OpsBeacon, Inc.
 *  \ - /    All rights reserved.
 *   };{
 */

import { sendFetchUsersRequest } from './network';

const fetchCountry = async () => {
  try {
    const { success, payload } = await sendFetchUsersRequest();

    if (!success) {
      return {
        success: false,
        payload: {
          country: []
        }
      };
    }

    if (!payload) {
      return { success: false, payload: { country: [] } };
    }

    const { country } = payload;

    

    return {
      success: true,
      payload: { country }
    };
  } catch (ex) {
    console.log(ex);
    return { success: false, payload: { country: [] } };
  }
};

export { fetchCountry };

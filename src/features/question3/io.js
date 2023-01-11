import { sendFetchcountriesRequest } from './network';

const fetchCountries = async () => {
  try {
    const { success, payload } = await sendFetchcountriesRequest();

    if (!success) {
      return {
        success: false,
        payload: {
          countries: []
        }
      };
    }

    if (!payload) {
      return { success: false, payload: { countries: [] } };
    }

    const { countries } = payload;

    return {
      success: true,
      payload: { countries }
    };
  } catch (ex) {
    console.log(ex);
    return { success: false, payload: { countries: [] } };
  }
};

export { fetchCountries };

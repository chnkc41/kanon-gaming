import { sendFetchCountryRequest } from './network';

const fetchCountry = async (countryName) => {
  try {
    const { success, payload } = await sendFetchCountryRequest(countryName);

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

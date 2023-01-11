const API_ROOT = 'https://restcountries.com';

export const urls = {
  URL_COUNTRY: `${API_ROOT}/v2/name`,
  URL_COUNTRIES: `${API_ROOT}/v2/all`
};

export const globalViewStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  DONE: 'DONE'
};

export const countryColumns = ['flag', 'name', 'capital', 'region'];

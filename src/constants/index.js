 const API_ROOT = "https://restcountries.com";

 export const urls = {
  URL_COUNTRY: `${API_ROOT}/v2/name`, 
 };
 
 export const globalViewStates = {
   DEFAULT: 'DEFAULT',
   LOADING: 'LOADING',
   ERROR: 'ERROR', 
   DONE: 'DONE'
 };

 export const countryColumns = ["name", "capital", "flag", "region"]
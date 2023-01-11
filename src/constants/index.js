const API_ROOT = 'https://restcountries.com';
const API_ROOT_AUTH = 'http://localhost:3010';

export const urls = {
  URL_COUNTRY: `${API_ROOT}/v2/name`,
  URL_COUNTRIES: `${API_ROOT}/v2/all`,
  URL_REGISTER: `${API_ROOT_AUTH}/users`
};

export const globalViewStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  DONE: 'DONE',
  REDIRECT_TO_DASHBOARD: 'REDIRECT_TO_DASHBOARD',
};

export const countryColumns = ['flag', 'name', 'capital', 'region'];

export const menu = [
  {
    to: 'question1',
    name: 'Question 1'
  },
  {
    to: 'question2',
    name: 'Question 2'
  },
  {
    to: 'question3',
    name: 'Question 3'
  },
  {
    to: 'question4',
    name: 'Question 4 - Register'
  },
  {
    to: 'question5',
    name: 'Question 5 - Sign up'
  },
  {
    to: 'question6',
    name: 'Question 6 - Game'
  }
];
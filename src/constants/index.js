const API_ROOT = 'https://restcountries.com';
const API_ROOT_USERS = 'http://localhost:3010';
const API_ROOT_USERS_JWT = 'http://localhost:8000';

export const urls = {
  URL_COUNTRY: `${API_ROOT}/v2/name`,
  URL_COUNTRIES: `${API_ROOT}/v2/all`,
  URL_REGISTER: `${API_ROOT_USERS}/users`,
  URL_SIGNIN: `${API_ROOT_USERS_JWT}/auth/login`
};

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
    name: 'Question 4 - Sign Up'
  },
  {
    to: 'question5',
    name: 'Question 5 - Sign in'
  },
  {
    to: 'question6',
    name: 'Question 6 - Game'
  }
];

export const globalViewStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  DONE: 'DONE',
  REDIRECT: 'REDIRECT'
};

export const countryColumns = ['flag', 'name', 'capital', 'region'];

export const fruits = ['cherry', 'apple', 'banana', 'lemon'];

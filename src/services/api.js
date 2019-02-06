import axios from 'axios';
import token from './token';

export const SECRET = token;

const api = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': SECRET,
  },
});

export default api;

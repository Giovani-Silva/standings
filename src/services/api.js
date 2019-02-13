import axios from 'axios';

export const SECRET = 'TOKEN_HERE';

const api = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': SECRET,
  },
});

export default api;

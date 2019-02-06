import axios from 'axios';

export const SECRET = 'football_data_api_token';

const api = axios.create({
  baseURL: 'api.football-data.org/v2/',
});

export default api;

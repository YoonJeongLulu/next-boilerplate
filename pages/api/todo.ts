import axios from 'axios';

const api = axios.create({
  baseURL: '', // insert your base URL
});

export default api;

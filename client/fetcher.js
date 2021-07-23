import axios from 'axios';
import { async } from 'regenerator-runtime';

axios.defaults.baseURL = 'http://localhost:8000';

export const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

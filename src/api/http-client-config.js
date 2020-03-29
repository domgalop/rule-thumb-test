import axios from 'axios';

const httpClientConfig = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export default httpClientConfig;

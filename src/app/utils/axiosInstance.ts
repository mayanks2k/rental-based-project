import { BASE_URL } from '@/constants';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Default to localhost if not set
  // You can add other configurations here if needed
  timeout: 10000, // Example: setting a timeout of 10 seconds
});

export default axiosInstance;

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Authorization': `Bearer 3|o8uWqUWq9DlFDRmX71SYj5iafMjJkVBTYZWAjFX2`
  }
});

export default apiClient;

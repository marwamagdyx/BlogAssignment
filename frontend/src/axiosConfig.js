import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
axios.create({
  baseURL: 'http://localhost:3000'  // Make sure this matches your backend
});

export default axios;
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log(localStorage.getItem('token'));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (userData) => {
  try {
    const response = await api.post('/register', userData); // Calls /api/register
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials); // Calls /api/login
    localStorage.setItem('token', response.data.access_token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get('/user'); // Calls /api/user
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

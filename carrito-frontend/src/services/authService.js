import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';  // URL de tu backend

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { token };
  }
  return null;
};

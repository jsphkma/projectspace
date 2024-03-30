import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const AuthService = {
  async login(email: string, password: string) {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },

  async logout() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.post(`${API_URL}/logout`, { token });
        localStorage.removeItem('token');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  },

  async isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.get(`${API_URL}/authenticated`, {
          headers: { token }
        });
        return response.data.authenticated;
      } catch (error) {
        console.error('Authentication check failed:', error);
        return false;
      }
    }
    return false;
  }
};
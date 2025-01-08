import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, getCurrentUser } from '../services/authService';

// Crear contexto
const AuthContext = createContext();

// Proveedor de contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const loginUser = async (email, password) => {
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const registerUser = async (userData) => {
    try {
      await register(userData);
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registerUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

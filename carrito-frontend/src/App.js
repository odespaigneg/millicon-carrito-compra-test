import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Profile from './components/Profile/Profile';
import PrivateRoute from './utils/privateRoute';
import ProductList from './components/Product/ProductList';
import CartSummary from './components/Cart/CartSummary';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <PrivateRoute path="/" element={<ProductList />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <PrivateRoute path="/cart" element={<CartSummary />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

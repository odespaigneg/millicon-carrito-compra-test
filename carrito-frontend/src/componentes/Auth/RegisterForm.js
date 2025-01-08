import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const RegisterForm = () => {
  const { registerUser } = useAuth();
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    shippingAddress: '',
    birthDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(userData);
  };

  return (
    <div className="register-form">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="shippingAddress">Dirección de Envío</label>
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            value={userData.shippingAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="birthDate">Fecha de Nacimiento</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={userData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;

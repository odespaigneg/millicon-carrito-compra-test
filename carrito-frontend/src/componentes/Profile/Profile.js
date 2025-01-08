import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getCurrentUserDetails, updateUserDetails } from '../../services/authService';

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    lastName: '',
    email: '',
    shippingAddress: '',
    birthDate: '',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await getCurrentUserDetails(user.token);
      setProfileData(data);
    };

    if (user) {
      fetchProfileData();
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserDetails(user.token, profileData);
    setEditing(false);
  };

  return (
    <div className="profile">
      <h2>Perfil de Usuario</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              disabled
            />
          </div>
          <div>
            <label>Dirección de Envío</label>
            <input
              type="text"
              name="shippingAddress"
              value={profileData.shippingAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              name="birthDate"
              value={profileData.birthDate}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Guardar Cambios</button>
        </form>
      ) : (
        <div>
          <p><strong>Nombre:</strong> {profileData.name}</p>
          <p><strong>Apellido:</strong> {profileData.lastName}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Dirección de Envío:</strong> {profileData.shippingAddress}</p>
          <p><strong>Fecha de Nacimiento:</strong> {profileData.birthDate}</p>
          <button onClick={() => setEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

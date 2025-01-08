import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';  // URL de tu backend para productos

// Obtener lista de productos
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

// Obtener detalles de un producto por ID
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

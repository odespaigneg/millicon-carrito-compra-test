import axios from 'axios';

const API_URL = 'http://localhost:8080/api/cart';  // URL de tu backend para el carrito

// Obtener los artículos del carrito de compras
export const getCart = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

// Añadir un artículo al carrito
export const addToCart = async (productId, quantity) => {
  const response = await axios.post(`${API_URL}/add`, { productId, quantity });
  return response.data;
};

// Eliminar un artículo del carrito
export const removeFromCart = async (cartItemId) => {
  const response = await axios.delete(`${API_URL}/remove/${cartItemId}`);
  return response.data;
};

// Confirmar la compra
export const checkout = async (shippingAddress) => {
  const response = await axios.post(`${API_URL}/checkout`, { shippingAddress });
  return response.data;
};

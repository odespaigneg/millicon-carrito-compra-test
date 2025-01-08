import React from 'react';
import { removeFromCart } from '../../services/cartService';

const CartItem = ({ item, onRemove }) => {
  const handleRemove = async () => {
    await removeFromCart(item.id);
    onRemove(item.id);  // Notificar al componente padre para eliminar el artículo
  };

  return (
    <div className="cart-item">
      <img src={item.product.imageUrl} alt={item.product.name} />
      <h3>{item.product.name}</h3>
      <p>{`Cantidad: ${item.quantity}`}</p>
      <p>{`Precio: $${item.product.price}`}</p>
      <p>{`Total: $${item.product.price * item.quantity}`}</p>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};

export default CartItem;

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.drug.id}>
            <p>{item.drug.name}</p>
            <p>Price: ${item.drug.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateQuantity(item.drug.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(item.drug.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.drug.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.drug.price * item.quantity, 0)}</p>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;

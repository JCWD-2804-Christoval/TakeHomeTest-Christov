// src/pages/CartPage.tsx

import React, { useContext } from 'react';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';
import '../assets/styles/Cart.css';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <Cart
        items={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </div>
  );
};

export default CartPage;

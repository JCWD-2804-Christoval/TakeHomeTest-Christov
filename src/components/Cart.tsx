import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../assets/styles/Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.drug.name}</h3>
              <p>{item.drug.description}</p>
              <p>Price: ${item.drug.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.drug.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeFromCart(item.drug.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

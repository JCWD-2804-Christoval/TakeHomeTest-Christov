import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../assets/styles/Checkout.css';

const Checkout: React.FC = () => {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <div>
        <h2>Shipping Information</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <h2>Payment Information</h2>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <div>
        <h2>Order Summary</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.drug.name} - ${item.drug.price} x {item.quantity}</p>
          </div>
        ))}
        <button onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;

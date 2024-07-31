import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');

  const handleCheckout = () => {
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cart.map((item) => (
          <div key={item.drug.id}>
            <p>{item.drug.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Shipping Information</h3>
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
        <h3>Payment Information</h3>
        <input
          type="text"
          placeholder="Payment Details"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
      </div>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;

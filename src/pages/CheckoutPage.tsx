import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
import { CartContext } from '../context/CartContext';
import { placeOrder } from '../services/api';
import { Order } from '../types';
import '../assets/styles/Checkout.css';

const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useContext(CartContext)!;
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      const order: Order = {
        id: Date.now(),
        items: cartItems,
        totalAmount: cartItems.reduce((total, item) => total + item.drug.price * item.quantity, 0),
        shippingAddress,
        paymentMethod,
        status: 'Pending',
      };
      await placeOrder(order);
      clearCart();
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <Checkout
        cartItems={cartItems}
        shippingAddress={shippingAddress}
        setShippingAddress={setShippingAddress}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        placeOrder={handlePlaceOrder}
      />
    </div>
  );
};

export default CheckoutPage;

import { Drug, CartItem, Order } from '../types';

const API_BASE_URL = 'http://localhost:3000';

export const fetchDrugs = async (): Promise<Drug[]> => {
  const response = await fetch(`${API_BASE_URL}/drugs`);
  if (!response.ok) {
    throw new Error('Failed to fetch drugs');
  }
  return response.json();
};

export const fetchDrugById = async (id: number): Promise<Drug> => {
  const response = await fetch(`${API_BASE_URL}/drugs/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch drug');
  }
  return response.json();
};

export const addToCart = async (item: CartItem): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }
  };

export const removeFromCart = async (itemId: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
    }
  };

export const updateCartItemQuantity = async (itemId: number, quantity: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
      throw new Error('Failed to update cart item quantity');
    }
  };

export const fetchCartItems = async (): Promise<CartItem[]> => {
    const response = await fetch(`${API_BASE_URL}/cart`);
    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }
    return response.json();
  };
  
export const placeOrder = async (order: Order): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    if (!response.ok) {
      throw new Error('Failed to place order');
    }
  };
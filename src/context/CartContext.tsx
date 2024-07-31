import React, { createContext, useContext, useState } from 'react';
import { Drug } from '../types';

interface CartItem {
  drug: Drug;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (drug: Drug) => void;
  updateQuantity: (drugId: number, quantity: number) => void;
  removeItem: (drugId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (drug: Drug) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.drug.id === drug.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.drug.id === drug.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { drug, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (drugId: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.drug.id === drugId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (drugId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.drug.id !== drugId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

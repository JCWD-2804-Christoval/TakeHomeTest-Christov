import React, { createContext, useState, ReactNode } from 'react';
import { Drug } from '../types';

interface CartItem {
  drug: Drug;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (drug: Drug) => void;
  removeFromCart: (drugId: number) => void;
  updateQuantity: (drugId: number, quantity: number) => void;
  children?: ReactNode; // Added this line to fix children issues
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (drug: Drug) => {
    setCart((prev) => [...prev, { drug, quantity: 1 }]);
  };

  const removeFromCart = (drugId: number) => {
    setCart((prev) => prev.filter((item) => item.drug.id !== drugId));
  };

  const updateQuantity = (drugId: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.drug.id === drugId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


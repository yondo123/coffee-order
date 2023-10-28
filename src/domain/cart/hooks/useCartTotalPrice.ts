import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('Cannot find CartProvider');
  }
  return context;
};

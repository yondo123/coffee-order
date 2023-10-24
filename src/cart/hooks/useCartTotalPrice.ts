import { useContext } from 'react';
import { CartContext } from '../context/context';

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('Cannot find CartProvider');
  }
  return context;
};

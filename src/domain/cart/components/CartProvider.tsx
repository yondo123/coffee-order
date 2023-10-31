import { useReducer, ReactNode } from 'react';
import { CartContext } from '../contexts/cartContext';
import type { CartState, Action } from '../contexts/cartContext';

const reducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return { ...state, totalPrice: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { totalPrice: 0 });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

import React, { createContext } from 'react';

export type CartState = {
  totalPrice: number;
};

export type Action = {
  type: 'SET_TOTAL_PRICE';
  payload: number;
};

export const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

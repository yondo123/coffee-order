import Storage from '@shared/data/browserStorage/Storage';
import CartStorageMapper from '@cart/data/CartStorageMapper';
import { useState } from 'react';
import type { CartItem } from '@cart/types';

const storage = new Storage('PRODUCTS_CART', new CartStorageMapper());

export const useCartStorage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(storage.get());

  const getStorage = () => {
    return cartItems;
  };

  const setStorage = (newCartItem: CartItem[]) => {
    setCartItems(newCartItem);
    storage.set(newCartItem);
  };

  const clearStorage = (callback?: () => void) => {
    storage.clear();
    setCartItems([]);
    if (callback) {
      callback();
    }
  };

  return { getStorage, setStorage, clearStorage };
};

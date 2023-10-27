import Storage from '@shared/data/browserStorage/Storage';
import CartStorageMapper from '@shared/data/storage/CartStorageMapper';
import { CartItem } from './CartItem';
import { useCart } from '../hooks/useCartTotalPrice';

export const CartList = () => {
  const storage = new Storage('PRODUCTS_CART', new CartStorageMapper());
  const { state, dispatch } = useCart();
  const cartItem = storage.get();

  const updateTotalPrice = (price: number) => {
    dispatch({ type: 'SET_TOTAL_PRICE', payload: (state.totalPrice += price) });
  };

  return (
    <>
      {cartItem?.map(({ productId, optionId, quantity }) => (
        <CartItem
          key={optionId}
          productId={productId}
          optionId={optionId}
          quantity={quantity}
          onUpdateTotalPrice={updateTotalPrice}
        />
      ))}
    </>
  );
};

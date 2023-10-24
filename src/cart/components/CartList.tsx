import Storage from '@shared/data/browserStorage/Storage';
import CartStorageMapper from '@shared/data/storage/CartStorageMapper';
import { Item } from './Item';
import { useCart } from '../hooks/useCartTotalPrice';

export const CartList = () => {
  const { state, dispatch } = useCart();
  const storage = new Storage('PRODUCTS_CART', new CartStorageMapper());
  const cartItem = storage.get();

  const updateTotalPrice = (price: number) => {
    dispatch({ type: 'SET_TOTAL_PRICE', payload: (state.totalPrice += price) });
  };

  return (
    <>
      {cartItem?.map(({ productId, optionId, quantity }) => (
        <Item
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

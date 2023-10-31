import { CartItem } from './CartItem';
import { useCart } from '../hooks/useCartTotalPrice';
import { useCartStorage } from '../hooks/useCartStorage';
import { MessageView } from '@layout/components';
import { isEmptyObject } from '@shared/utils/object';

export const CartList = () => {
  const { getStorage } = useCartStorage();
  const { state, dispatch } = useCart();
  const cartItems = getStorage();

  const updateTotalPrice = (price: number) => {
    dispatch({ type: 'SET_TOTAL_PRICE', payload: (state.totalPrice += price) });
  };

  if (isEmptyObject(cartItems)) {
    return <MessageView message="장바구니 내역이 존재하지 않습니다." />;
  }

  return (
    <>
      {cartItems?.map(({ productId, optionId, quantity }) => (
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

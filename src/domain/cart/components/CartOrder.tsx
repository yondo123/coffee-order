import Storage from '@shared/data/browserStorage/Storage';
import CartStorageMapper from '../data/CartStorageMapper';
import { Button } from '@layout/components';
import { OrderButtonWrapper } from '../styles';

export const CartOrder = () => {
  const storage = new Storage('PRODUCTS_CART', new CartStorageMapper());
  const cartItem = storage.get();
  return (
    <OrderButtonWrapper>
      <Button
        disabled={cartItem?.length === 0}
        onClick={() => {
          alert('주문이 완료되었습니다.');
          storage.clear();
        }}
      >
        주문 완료
      </Button>
    </OrderButtonWrapper>
  );
};

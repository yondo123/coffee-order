import { useCartStorage } from '../hooks/useCartStorage';
import { Button } from '@layout/components';
import { OrderButtonWrapper } from '../styles';
import { isEmptyObject } from '@shared/utils/object';

export const CartOrder = () => {
  const { getStorage, clearStorage } = useCartStorage();
  const cartItem = getStorage();

  if (isEmptyObject(cartItem)) {
    return null;
  }

  return (
    <OrderButtonWrapper>
      <Button
        disabled={cartItem?.length === 0}
        onClick={() => {
          clearStorage(() => {
            alert('주문이 완료되었습니다.');
          });
        }}
      >
        주문 완료
      </Button>
    </OrderButtonWrapper>
  );
};

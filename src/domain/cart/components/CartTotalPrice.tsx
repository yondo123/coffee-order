import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { useCart } from '../hooks/useCartTotalPrice';
import { TotalPriceWrapper, Price } from '../styles';

export const TotalPrice = () => {
  const { state } = useCart();
  const formattedPrice = formatNumberToCKoreanCurrency(state.totalPrice);
  return (
    <TotalPriceWrapper>
      <h2>총 상품가격</h2>
      <Price>{formattedPrice} 원</Price>
    </TotalPriceWrapper>
  );
};

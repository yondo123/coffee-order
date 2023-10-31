import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { useCart } from '../hooks/useCartTotalPrice';
import { Heading } from '@layout/components';
import { TotalPriceWrapper } from '../styles';

export const TotalPrice = () => {
  const { state } = useCart();
  const formattedPrice = formatNumberToCKoreanCurrency(state.totalPrice);
  return (
    <TotalPriceWrapper>
      <Heading size="xl">총 상품가격</Heading>
      <Heading size="large" color="#fc8020">
        {formattedPrice}원
      </Heading>
    </TotalPriceWrapper>
  );
};

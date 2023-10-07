import { Stack } from '@layout/mixins';
import { ProductOrderWrapper } from '../styles';
import type { ProductOptionData } from '../types';

interface ProductOrderProps {
  option: ProductOptionData | null;
}

export const ProductOrder = ({ option }: ProductOrderProps) => {
  if (!option) {
    return null;
  }
  return (
    <ProductOrderWrapper>
      <Stack>
        <h3>선택된 상품</h3>
        <p>{option.name}</p>
        <input placeholder="수량을 입력하세요" min={1} max={option.stock} type="number" />
        <button type="button">주문하기</button>
      </Stack>
    </ProductOrderWrapper>
  );
};

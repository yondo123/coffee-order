import { useState } from 'react';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { Select } from '@layout/components/Select';
import { ProductOptionContainer } from '../styles';
import { ProductOrder } from './ProductOrder';
import type { ProductOptionData } from '../types';

interface ProductOptionProps {
  productOptions: ProductOptionData[];
  productPrice: number;
  productName: string;
}

export const ProductOption = ({ productName, productPrice, productOptions }: ProductOptionProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const selectedOption = productOptions.find(({ id }) => id === Number(selectedOptionId));

  return (
    <ProductOptionContainer>
      <h3>{productName}</h3>
      <p>{formatNumberToCKoreanCurrency(productPrice)} 원</p>
      <Select
        onChange={(e) => {
          setSelectedOptionId(e.target.value);
        }}
        list={productOptions.map(({ id, name, price, stock }) => {
          let label = stock ? `${productName} ${name}` : `(품절) ${productName} ${name}`;
          if (price) {
            label += ` (${formatNumberToCKoreanCurrency(price)} 원)`;
          }
          return {
            label,
            value: String(id),
            disabled: !stock
          };
        })}
      />
      <ProductOrder option={selectedOptionId ? productOptions : null} />
    </ProductOptionContainer>
  );
};

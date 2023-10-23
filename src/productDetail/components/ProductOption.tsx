import { useState } from 'react';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { Select } from '@layout/components/Select';
import { ProductOptionContainer } from '../styles';
import { ProductOrder } from './ProductOrder';
import type { ProductOptionData } from '../types';

interface ProductOptionProps {
  options: ProductOptionData[];
  price: number;
  name: string;
  productId: number;
}

export const ProductOption = ({ name, price, options, productId }: ProductOptionProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const selectedOption = options.find(({ id }) => id === Number(selectedOptionId));

  const createOptionList = (options: ProductOptionData[], name: string) => {
    return options.map(({ id, name: optionName, price, stock }) => {
      const baseLabel = stock ? `${name} ${optionName}` : `(품절) ${name} ${optionName}`;
      const priceLabel = price ? ` (+${formatNumberToCKoreanCurrency(price)} 원)` : '';
      const label = [baseLabel, priceLabel].join('');

      return {
        label,
        value: String(id),
        disabled: !stock
      };
    });
  };

  return (
    <ProductOptionContainer>
      <h3>{name}</h3>
      <p>{formatNumberToCKoreanCurrency(price)} 원</p>
      <Select
        onChange={(e) => {
          setSelectedOptionId(e.target.value);
        }}
        list={createOptionList(options, name)}
      />
      <ProductOrder option={selectedOption} productId={productId} />
    </ProductOptionContainer>
  );
};

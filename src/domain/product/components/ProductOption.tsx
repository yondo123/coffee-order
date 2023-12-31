import { useState } from 'react';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { Heading, Select } from '@layout/components';
import { ProductAddCart } from './ProductAddCart';
import { ProductOptionContainer } from '../styles';
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
      <Heading>{name}</Heading>
      <p>{formatNumberToCKoreanCurrency(price)} 원</p>
      <Select
        onChange={(e) => {
          setSelectedOptionId(e.target.value);
        }}
        list={createOptionList(options, name)}
      />
      <ProductAddCart option={selectedOption} productId={productId} />
    </ProductOptionContainer>
  );
};

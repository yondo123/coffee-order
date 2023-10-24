import { useRequestProductDetail } from '@shared/hooks/services/queries/useRequestProductDetail';
import { ImageCenter } from '@layout/mixins';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { ItemWrapper, ItemDetail } from '../styles';
import type { CartItem } from '../types';
import { useEffect } from 'react';

interface ItemProps extends CartItem {
  onUpdateTotalPrice: (price: number) => void;
}

export const Item = ({ productId, optionId, quantity, onUpdateTotalPrice }: ItemProps) => {
  const productDetail = useRequestProductDetail(productId);
  const { name: productName, productOptions, imageUrl } = productDetail;
  const optionDetail = productOptions.find((option) => option.id === optionId);
  const price = optionDetail?.price ? optionDetail.price * quantity : 0;
  const formattedPrice = formatNumberToCKoreanCurrency(price);

  useEffect(() => {
    onUpdateTotalPrice(price);
  }, [price]);

  return (
    <section>
      <ItemWrapper>
        <ImageCenter>
          <img src={imageUrl} alt={productName} />
        </ImageCenter>
        <ItemDetail>
          <h3>{`${productName} ${optionDetail?.name ?? ''} ${quantity} 개`}</h3>
          <p>{formattedPrice} 원</p>
        </ItemDetail>
      </ItemWrapper>
    </section>
  );
};

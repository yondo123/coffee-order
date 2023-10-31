import { useEffect } from 'react';
import { useQueryProductDetail } from '@product/hooks/services/useQueryProductDetail';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { ItemWrapper, ItemDetail } from '../styles';
import { Image } from '@layout/components';
import type { CartItem as CartItemType } from '../types';

interface ItemProps extends CartItemType {
  onUpdateTotalPrice: (price: number) => void;
}

export const CartItem = ({ productId, optionId, quantity, onUpdateTotalPrice }: ItemProps) => {
  const productDetail = useQueryProductDetail(productId);
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
        <Image src={imageUrl} alt={productName} width={128} height={128} />
        <ItemDetail>
          <h3>{`${productName} ${optionDetail?.name ?? ''} ${quantity} 개`}</h3>
          <p>{formattedPrice} 원</p>
        </ItemDetail>
      </ItemWrapper>
    </section>
  );
};

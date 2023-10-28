import { ImageCenter } from '@layout/mixins';
import { useRouterNavigate } from '@shared/hooks/router/useRouterNavigate';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { MenuCardWrapper, MenuDetail } from '../styles';
import { Heading } from '@layout/components';
import type { ProductData } from '../types';

interface ProductItemProps {
  product: ProductData;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { id, imageUrl, name, price } = product;
  const moveToDetailPage = useRouterNavigate({ to: `/products/${product.id}`, state: id });

  return (
    <MenuCardWrapper onClick={moveToDetailPage}>
      <ImageCenter>
        <img src={imageUrl} alt={name} />
      </ImageCenter>
      <MenuDetail>
        <Heading>{name}</Heading>
        <p>{formatNumberToCKoreanCurrency(price)} 원</p>
      </MenuDetail>
    </MenuCardWrapper>
  );
};

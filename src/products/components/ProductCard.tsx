import { ImageCenter } from 'src/layout/mixins';
import { useRouterNavigate } from '@shared/hooks/router/useRouterNavigate';
import { MenuCardWrapper, MenuDetail } from '../styles';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import type { ProductData } from '../types';

interface ProductCardProps {
  product: ProductData;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, imageUrl, name, price } = product;
  const moveToDetailPage = useRouterNavigate({ to: `/products/${product.id}`, state: id });

  return (
    <MenuCardWrapper onClick={moveToDetailPage}>
      <ImageCenter>
        <img src={imageUrl} alt={name} />
      </ImageCenter>
      <MenuDetail>
        <h3>{name}</h3>
        <p>{formatNumberToCKoreanCurrency(price)} 원</p>
      </MenuDetail>
    </MenuCardWrapper>
  );
};

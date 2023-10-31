import { useRouterNavigate } from '@shared/hooks/router/useRouterNavigate';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import { MenuCardWrapper, MenuDetail } from '../styles';
import { Heading, Image } from '@layout/components';
import type { ProductData } from '../types';

interface ProductItemProps {
  product: ProductData;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { id, imageUrl, name, price } = product;
  const moveToDetailPage = useRouterNavigate({ to: `/products/${product.id}`, state: id });

  return (
    <MenuCardWrapper onClick={moveToDetailPage}>
      <Image src={imageUrl} alt={name} width={128} height={128} />
      <MenuDetail>
        <Heading>{name}</Heading>
        <p>{formatNumberToCKoreanCurrency(price)} 원</p>
      </MenuDetail>
    </MenuCardWrapper>
  );
};

import { ProductItem } from './ProductItem';
import { useRequestProducts } from '@shared/hooks/services/queries/useRequestProducts';
import { PageContainer } from '@layout/styles/pageContainerStyle';
import { MenuList } from '../styles';

export const ProductList = () => {
  const products = useRequestProducts();
  return (
    <PageContainer>
      <h2>상품 목록</h2>
      <MenuList>
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </MenuList>
    </PageContainer>
  );
};

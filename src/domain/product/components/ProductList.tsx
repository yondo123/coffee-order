import { PageContainer } from '@layout/styles/pageContainerStyle';
import { ProductItem } from './ProductItem';
import { useQueryProductList } from '../hooks/services/useQueryProductList';
import { MenuList } from '../styles';

export const ProductList = () => {
  const products = useQueryProductList();
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

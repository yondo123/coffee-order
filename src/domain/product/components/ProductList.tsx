import { PageContainer } from '@layout/styles/pageContainerStyle';
import { Heading } from '@layout/components';
import { ProductItem } from './ProductItem';
import { useQueryProductList } from '../hooks/services/useQueryProductList';
import { MenuList } from '../styles';

export const ProductList = () => {
  const products = useQueryProductList();
  return (
    <PageContainer>
      <Heading size="xl">상품 목록</Heading>
      <MenuList>
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </MenuList>
    </PageContainer>
  );
};

import { ProductCard } from './ProductCard';
import { useRequestProducts } from '@shared/hooks/services/queries/useRequestProducts';
import { PageContainer } from '../../layout/styles/pageContainerStyle';
import { MenuList } from '../styles';

export const Products = () => {
  const products = useRequestProducts();
  return (
    <PageContainer>
      <h2>상품 목록</h2>
      <MenuList>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </MenuList>
    </PageContainer>
  );
};

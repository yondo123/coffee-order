import { ProductItem } from './ProductItem';
import { useQueryProductList } from '../hooks/services/useQueryProductList';
import { MenuList } from '../styles';

export const ProductList = () => {
  const products = useQueryProductList();
  return (
    <MenuList>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </MenuList>
  );
};

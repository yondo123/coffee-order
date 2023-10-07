import { Suspense } from 'react';
import { Products } from '../products/components/Products';

export const ProductsPage = () => {
  return (
    <Suspense fallback={<h2>로딩중이얏</h2>}>
      <Products />
    </Suspense>
  );
};

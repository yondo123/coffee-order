import { Suspense } from 'react';
import { PageContainer } from '@layout/styles/pageContainerStyle';
import { ProductDetail } from '../components/ProductDetail';

export const ProductDetailPage = () => {
  return (
    <Suspense>
      <PageContainer>
        <ProductDetail />
      </PageContainer>
    </Suspense>
  );
};

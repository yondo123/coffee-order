import { Suspense } from 'react';
import { ProductDetail } from './components/ProductDetail';
import { PageContainer } from '../layout/styles/pageContainerStyle';

export const DetailPage = () => {
  return (
    <Suspense>
      <PageContainer>
        <ProductDetail />
      </PageContainer>
    </Suspense>
  );
};

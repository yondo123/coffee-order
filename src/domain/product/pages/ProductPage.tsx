import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessageView, Loader, Heading } from '@layout/components/';
import { PageContainer } from '@layout/styles/pageContainerStyle';
import { ProductList } from '../components/ProductList';

export const ProductPage = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorMessageView}>
      <Suspense fallback={<Loader />}>
        <PageContainer>
          <Heading size="xxl">상품 목록</Heading>
          <ProductList />
        </PageContainer>
      </Suspense>
    </ErrorBoundary>
  );
};

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessageView, Heading } from '@layout/components/';
import { ProductList } from '../components/ProductList';

export const ProductPage = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorMessageView}>
      <Suspense fallback={<Heading size="xl">Loading..</Heading>}>
        <ProductList />
      </Suspense>
    </ErrorBoundary>
  );
};

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '@layout/components/ErrorPage';
import { ProductList } from '../components/ProductList';

export const ProductPage = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorPage}>
      <Suspense fallback={<h2>Loading..</h2>}>
        <ProductList />
      </Suspense>
    </ErrorBoundary>
  );
};

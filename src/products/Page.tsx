import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '@layout/components/ErrorPage';
import { Products } from '../products/components/Products';

export const ProductsPage = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorPage}>
      <Suspense fallback={<h2>Loading..</h2>}>
        <Products />
      </Suspense>
    </ErrorBoundary>
  );
};

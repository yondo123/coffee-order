import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessageView } from '@layout/components/';
import { ProductList } from '../components/ProductList';

export const ProductPage = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorMessageView}>
      <Suspense fallback={<h2>Loading..</h2>}>
        <ProductList />
      </Suspense>
    </ErrorBoundary>
  );
};

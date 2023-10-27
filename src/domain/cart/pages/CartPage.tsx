import { Suspense } from 'react';
import { PageContainer } from '@layout/styles/pageContainerStyle';
import { CartProvider, CartList, TotalPrice, CartOrder } from '../components';

export const CartPage = () => {
  return (
    <CartProvider>
      <Suspense>
        <PageContainer>
          <h2>장바구니</h2>
          <CartList />
          <TotalPrice />
          <CartOrder />
        </PageContainer>
      </Suspense>
    </CartProvider>
  );
};

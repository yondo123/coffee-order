import { Suspense } from 'react';
import { Heading } from '@layout/components';
import { PageContainer } from '@layout/styles/pageContainerStyle';
import { CartProvider, CartList, TotalPrice, CartOrder } from '../components';

export const CartPage = () => {
  return (
    <CartProvider>
      <Suspense>
        <PageContainer>
          <Heading size="xxl">장바구니</Heading>
          <CartList />
          <TotalPrice />
          <CartOrder />
        </PageContainer>
      </Suspense>
    </CartProvider>
  );
};

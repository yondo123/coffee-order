import { Suspense } from 'react';
import { CartProvider } from './context/CartProvider';
import { CartList } from './components/CartList';
import { TotalPrice } from './components/TotalPrice';
import { PageContainer } from '@layout/styles/pageContainerStyle';
import { OrderButton } from './components/OrderButton';

export const CartPage = () => {
  return (
    <CartProvider>
      <Suspense>
        <PageContainer>
          <h2>장바구니</h2>
          <CartList />
          <TotalPrice />
          <OrderButton />
        </PageContainer>
      </Suspense>
    </CartProvider>
  );
};

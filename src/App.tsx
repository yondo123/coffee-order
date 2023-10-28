import { Container } from './layout/components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductPage, ProductDetailPage } from '@product/pages';
import { CartPage } from '@cart/pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" Component={ProductPage} />
          <Route path="/products/:productId" Component={ProductDetailPage} />
          <Route path="/cart" Component={CartPage} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

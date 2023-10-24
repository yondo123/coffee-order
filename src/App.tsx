import { Container } from './layout/components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsPage } from '@products/Page';
import { DetailPage } from '@productDetail/Page';
import { CartPage } from '@cart/page';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" Component={ProductsPage} />
          <Route path="/products/:productId" Component={DetailPage} />
          <Route path="/cart" Component={CartPage} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

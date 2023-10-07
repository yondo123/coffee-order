import { Container } from './layout/components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsPage } from '@products/Page';
import { DetailPage } from '@productDetail/Page';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" Component={ProductsPage} />
          <Route path="/products/:productId" Component={DetailPage} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

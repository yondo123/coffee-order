import { useRequestProductDetail } from '../api/useRequestProductDetail';
import { useRouterLocation } from '@shared/hooks/useRouterLocation';
import { isEmptyObject } from '@shared/utils/object';
import { EmptyPage } from '@layout/components';
import { ProductOption } from './ProductOption';
import { ProductDetailContainer } from '../styles';
import { ImageCenter } from '@layout/mixins';

export const ProductDetail = () => {
  const productId = useRouterLocation();
  const productDetail = useRequestProductDetail(productId);

  if (isEmptyObject(productDetail)) {
    return <EmptyPage message="해당하는 상품이 존재하지 않습니다." />;
  }

  return (
    <section>
      <h2>{productDetail.name}</h2>
      <ProductDetailContainer>
        <ImageCenter>
          <img src={productDetail.imageUrl} alt={productDetail.name} />
        </ImageCenter>
        <ProductOption name={productDetail.name} price={productDetail.price} options={productDetail.productOptions} />
      </ProductDetailContainer>
    </section>
  );
};

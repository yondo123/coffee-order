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
  const { id, name, price, productOptions, imageUrl } = productDetail;

  if (isEmptyObject(productDetail)) {
    return <EmptyPage message="해당하는 상품이 존재하지 않습니다." />;
  }

  return (
    <section>
      <h2>{name}</h2>
      <ProductDetailContainer>
        <ImageCenter>
          <img src={imageUrl} alt={name} />
        </ImageCenter>
        <ProductOption name={name} price={price} options={productOptions} productId={id} />
      </ProductDetailContainer>
    </section>
  );
};

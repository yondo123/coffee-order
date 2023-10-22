import { useRequestProductDetail } from '../api/useRequestProductDetail';
import { useRouterLocation } from '@shared/hooks/useRouterLocation';
import { isEmptyObject } from '@shared/utils/object';
import { EmptyPage } from '@layout/components';
import { ProductOption } from './ProductOption';
import { ProductDetailContainer } from '../styles';
import { ImageHalf } from '@layout/mixins';

export const ProductDetail = () => {
  const productId = useRouterLocation();
  const productDetailInfo = useRequestProductDetail(productId);

  if (isEmptyObject(productDetailInfo)) {
    return <EmptyPage message="해당하는 상품이 존재하지 않습니다." />;
  }

  return (
    <section>
      <h2>{productDetailInfo.name}</h2>
      <ProductDetailContainer>
        <ImageHalf>
          <img src={productDetailInfo.imageUrl} alt={productDetailInfo.name} width={128} height={128} />
        </ImageHalf>
        <ProductOption
          productName={productDetailInfo.name}
          productPrice={productDetailInfo.price}
          productOptions={productDetailInfo.productOptions}
        />
      </ProductDetailContainer>
    </section>
  );
};

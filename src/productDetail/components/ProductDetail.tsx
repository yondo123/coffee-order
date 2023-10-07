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
  return (
    <>
      {isEmptyObject(productDetailInfo) && <EmptyPage message="해당하는 상품이 존재하지 않습니다." />}
      {!isEmptyObject(productDetailInfo) && (
        <section>
          <h2>{productDetailInfo.name}</h2>
          <ProductDetailContainer>
            <ImageHalf>
              <img src={productDetailInfo.imageUrl} alt={productDetailInfo.name} />
            </ImageHalf>
            <ProductOption
              productName={productDetailInfo.name}
              productPrice={productDetailInfo.price}
              productOptions={productDetailInfo.productOptions}
            />
          </ProductDetailContainer>
        </section>
      )}
    </>
  );
};

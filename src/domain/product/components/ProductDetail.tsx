import { useQueryProductDetail } from '../hooks/services/useQueryProductDetail';
import { useRouterLocation } from '@shared/hooks/router/useRouterLocation';
import { isEmptyObject } from '@shared/utils/object';
import { Heading, Image, MessageView } from '@layout/components';
import { ProductOption } from './ProductOption';
import { ProductDetailContainer } from '../styles';

export const ProductDetail = () => {
  const productId = useRouterLocation();
  const productDetail = useQueryProductDetail(productId);
  const { id, name, price, productOptions, imageUrl } = productDetail;

  if (isEmptyObject(productDetail)) {
    return <MessageView message="해당하는 상품이 존재하지 않습니다." />;
  }

  return (
    <section>
      <Heading size="xl">{name}</Heading>
      <ProductDetailContainer>
        <Image src={imageUrl} alt={name} placement="center" width={128} height={128} />
        <ProductOption name={name} price={price} options={productOptions} productId={id} />
      </ProductDetailContainer>
    </section>
  );
};

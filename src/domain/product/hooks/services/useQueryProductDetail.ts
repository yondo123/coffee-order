import { useQuery } from 'react-query';
import { fetchApi } from '@shared/utils/fetchApi';
import type { ProductDetailData } from '@product/types';

export const useQueryProductDetail = (productId: number): ProductDetailData => {
  const { data, error } = useQuery(['detail', productId], () =>
    fetchApi<ProductDetailData>({ method: 'GET', url: `/products/${productId}` })
  );

  if (error || !data) {
    throw error;
  }

  return data;
};

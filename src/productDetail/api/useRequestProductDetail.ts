import { useQuery } from 'react-query';
import { fetchApi } from '@shared/utils/fetchApi';
import type { ProductDetailData } from '../types';

export const useRequestProductDetail = (productId: number): ProductDetailData => {
  const { data, error } = useQuery(['detail', productId], () =>
    fetchApi<ProductDetailData>({ method: 'GET', url: `/products/${productId}` })
  );
  if (data) {
    return data;
  }
  throw error;
};

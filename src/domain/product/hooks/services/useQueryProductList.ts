import { useQuery } from 'react-query';
import { fetchApi } from '@shared/utils/fetchApi';
import type { ProductData } from '@product/types';

export const useQueryProductList = () => {
  const { data, error } = useQuery('products', () => fetchApi<ProductData[]>({ method: 'GET', url: '/products' }));

  if (error) {
    throw error;
  }

  return data;
};

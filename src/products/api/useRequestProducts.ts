import { useQuery } from 'react-query';
import { fetchApi } from '@shared/utils/fetchApi';
import type { ProductData } from '../types';

export const useRequestProducts = () => {
  const { data, error } = useQuery('products', () => fetchApi<ProductData[]>({ method: 'GET', url: '/products' }));
  if (error) {
    throw error;
  }
  return data;
};

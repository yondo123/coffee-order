import { ProductData } from '@products/types';

type ProductOption = {
  name: string;
  price: number;
  stock: number;
};

export interface ProductOptionData extends ProductOption {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface ProductDetailData extends ProductData {
  productOptions: ProductOptionData[];
}

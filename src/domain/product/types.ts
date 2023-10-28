type Product = {
  name: string;
  price: number;
};

type ProductOption = {
  name: string;
  price: number;
  stock: number;
};

export interface ProductData extends Product {
  id: number;
  imageUrl: string;
}

export interface ProductOptionData extends ProductOption {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface ProductDetailData extends ProductData {
  productOptions: ProductOptionData[];
}

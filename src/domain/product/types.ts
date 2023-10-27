type Product = {
  name: string;
  price: number;
};

export interface ProductData extends Product {
  id: number;
  imageUrl: string;
}

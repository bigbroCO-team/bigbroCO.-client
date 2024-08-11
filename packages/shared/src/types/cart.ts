export interface ProductImage {
  id: number;
  url: string;
  product: number;
}

export interface ProductOption {
  id: number;
  status: string;
  name: string;
}

export interface Product {
  id: number;
  options: ProductOption[];
  images: ProductImage[];
  category: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  date_created: string;
}

export interface Option {
  id: number;
  status: string;
  name: string;
}

export interface ProductItem {
  id: number;
  product: Product;
  option: Option;
  count: number;
}

export type ProductItemList = ProductItem[];

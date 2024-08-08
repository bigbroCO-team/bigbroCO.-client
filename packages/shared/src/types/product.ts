import { BrandType } from 'shared/types';

export interface ProductType {
  id: number;
  options: ProductOptionType[];
  images: ProductImageType[];
  category: BrandType;
  name: string;
  description: string;
  price: number;
  discount: number;
  open_stock: boolean;
  date_created: string;
}

export interface ProductOptionType {
  id: number;
  name: string;
  product: number;
  status: 'on_sale' | 'stop_sale' | 'sold_out' | 'discontinued';
}

export interface ProductImageType {
  id: number;
  url: string;
  product: number;
}

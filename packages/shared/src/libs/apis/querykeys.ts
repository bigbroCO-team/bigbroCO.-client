import { BrandType } from 'shared/types';

export const authQueryKeys = {
  getVerify: () => ['get', 'verify', 'token'],
} as const;

export const addressQueryKeys = {
  getAddress: () => ['get', 'address', 'list'],
  postAddress: () => ['post', 'address', 'add'],
  putAddress: () => ['put', 'modify', 'address'],
  deleteAddress: (id: number) => ['delete', 'address', id],
} as const;

export const productQueryKeys = {
  getProductDetailById: (id: number) => ['product', 'detail', String(id)],
  getProductListByQuery: (query: BrandType) => ['product', 'list', query],
} as const;

export const cartQueryKeys = {
  getCartInfo: () => ['get', 'cart', 'info'],
  postCart: () => ['post', 'cart', 'add'],
} as const;

import { BrandType } from 'shared/types';

export const authQueryKeys = {
  postLogin: () => ['auth', 'login', 'post'],
  getVerify: () => ['get', 'verify', 'token'],
} as const;

export const addressQueryKeys = {
  getAddress: () => ['get', 'address', 'list'],
  postAddress: () => ['post', 'address', 'add'],
  putAddress: (id: number) => ['put', `address/${id}`, 'modify'],
  deleteAddress: (id: number) => ['delete', `address/${id}`],
} as const;

export const productQueryKeys = {
  getProductDetailById: (id: number) => ['product', 'detail', String(id)],
  getProductListByQuery: (query: BrandType) => ['product', 'list', query],
} as const;

export const cartQueryKeys = {
  postCart: () => ['post', 'cart', 'add'],
} as const;

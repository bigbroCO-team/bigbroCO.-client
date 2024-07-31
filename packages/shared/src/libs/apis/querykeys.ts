import { BrandType } from 'shared/types';

export const authQueryKeys = {
  postLogin: () => ['auth', 'login', 'post'],
  getVerify: () => ['get', 'verify', 'token'],
} as const;

export const productQueryKeys = {
  getProductDetailById: (id: number) => ['product', 'detail', String(id)],
  getProductListByQuery: (query: BrandType) => ['product', 'list', query],
} as const;

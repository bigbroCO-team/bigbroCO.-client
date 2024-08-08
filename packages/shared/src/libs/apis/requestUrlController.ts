import { BrandType } from 'shared/types';

export const authUrl = {
  postLogin: () => '/auth/login',
  postVerify: () => '/auth/verify',
  postSignup: () => '/auth/signup',
} as const;

export const productUrl = {
  getProductDetailById: (id: number) => `/product/${id}`,
  getProductListByQuery: (query: BrandType) => `/product?category=${query}`,
} as const;

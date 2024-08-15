import { BrandType } from 'shared/types';

export const authUrl = {
  postVerify: () => '/auth/verify',
  postSignup: () => '/auth/signup',
} as const;

export const productUrl = {
  getProductDetailById: (id: number) => `/product/${id}`,
  getProductListByQuery: (query: BrandType) => `/product?category=${query}`,
} as const;

export const addressUrl = {
  getAddress: () => '/address',
  getAddressById: (id: number) => `/address/${id}`,
  postAddress: () => '/address',
  putAddress: (id: number) => `/address/${id}`,
  deleteAddress: (id: number) => `/address/${id}`,
};

export const cartUrl = {
  postCart: () => '/cart',
} as const;

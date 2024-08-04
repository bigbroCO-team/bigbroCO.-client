import { BrandType } from 'shared/types';

export const authUrl = {
  postLogin: () => '/auth/login',
  postVerify: () => '/auth/verify',
  postSignup: () => '/auth/signup',
} as const;

export const productUrl = {
  getProductById: (id: number) => `/product/${id}`,
  getProductByQuery: (query: BrandType) => `/product/?catecory=${query}`,
} as const;

export const addressUrl = {
  getAddress: () => '/address',
  postAddress: () => '/address',
  putAddress: (id: number) => `/address/${id}`,
  deleteAddress: (id: number) => `/address/${id}`,
}
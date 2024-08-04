export const authQueryKeys = {
  postLogin: () => ['auth', 'login', 'post'],
  getVerify: () => ['get', 'verify', 'token'],
} as const;

export const addressQueryKeys = {
  getAddress: () => ['get', 'address', 'token'],
  postAddress: () => ['post', 'address', 'token'],
  putAddress: (id: number) => ['put', `address/${id}`, 'token'],
  deleteAddress: (id: number) => ['delete', `address/${id}`, 'token'],
}
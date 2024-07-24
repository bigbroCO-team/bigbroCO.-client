export const authQueryKeys = {
  postLogin: () => ['auth', 'login', 'post'],
  getVerify: () => ['get', 'verify', 'token'],
} as const;

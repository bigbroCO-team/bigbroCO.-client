'use client';

import { useGetLayoutByWidth } from 'client/hooks';
import { LoginMobileLayout } from 'client/mobileLayout';
import { LoginPCLayout } from 'client/pcLayout';

const LoginLayout = () => {
  return useGetLayoutByWidth(<LoginPCLayout />, <LoginMobileLayout />);
};

export default LoginLayout;

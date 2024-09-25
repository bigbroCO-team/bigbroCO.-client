'use client';

import { useGetLayoutByWidth } from 'client/hooks';
import { CartMobileLayout } from 'client/mobileLayout';
import { CartPCLayout } from 'client/pcLayout';

const CartLayout = () => {
  return useGetLayoutByWidth(<CartPCLayout />, <CartMobileLayout />);
};

export default CartLayout;

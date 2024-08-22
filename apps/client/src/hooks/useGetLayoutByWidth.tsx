import { MobileWidth } from 'shared/constants';
import { useStore } from 'client/stores';
import { ReactNode } from 'react';

const useGetLayoutByWidth = (PCLayout: ReactNode, MobileLayout: ReactNode) => {
  const { width } = useStore();

  if (width > MobileWidth) return <>{PCLayout}</>;
  else return <>{MobileLayout}</>;
};

export default useGetLayoutByWidth;

'use client';

import { BrandType } from 'shared/types';
import { useGetProductList } from 'shared';
import { minutesToMs } from 'client/utils';
import { useGetLayoutByWidth } from 'client/hooks';
import { ProductListPCLayout } from 'client/pcLayout';
import { ProductListMobileLayout } from 'client/mobileLayout';

interface ProuctListLayoutProps {
  brand: BrandType;
}

const ProductListLayout: React.FC<ProuctListLayoutProps> = ({ brand }) => {
  const { data: productList } = useGetProductList(brand, {
    staleTime: minutesToMs(10),
    gcTime: minutesToMs(10),
  });

  return useGetLayoutByWidth(
    <ProductListPCLayout brand={brand} productList={productList} />,
    <ProductListMobileLayout brand={brand} productList={productList} />
  );
};

export default ProductListLayout;
